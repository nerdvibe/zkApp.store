import { UserRepo } from "@modules/user/UserModel";
import {
  sendResetPasswordEmail,
  sendPasswordUpdateSuccessEmail,
  sendVerificationEmail,
} from "@modules/communication/emailUtility";
import {
  comparePassword,
  generateAccessToken,
  generateRefreshToken,
  generateToken,
  hashPassword,
  isAuthenticated,
  verifyToken,
} from "../util";
import {
  isValidBoolean,
  isValidDiscordInvite,
  isValidEmail,
  isValidString,
  isValidUsername,
} from "@modules/util";
import {
  type MutationLoginArgs,
  type MutationRefreshTokenArgs,
  type MutationRequestResetPasswordArgs,
  type MutationSignupArgs,
  type MutationUpdatePasswordArgs,
  type MutationUpdateResetPasswordArgs,
  type MutationVerifyEmailArgs,
  type MutationResendVerifyEmailArgs,
} from "@interfaces/graphql";

export const Mutation = {
  signup: async (_: any, { user: signupObj }: MutationSignupArgs) => {
    // const { email, password } = user;
    if (
      !isValidEmail(signupObj.email) ||
      !isValidString(signupObj.password) ||
      !isValidUsername(signupObj.username) ||
      !isValidString(signupObj.xUsername, true) ||
      !isValidDiscordInvite(signupObj.discordUrl, true) ||
      !isValidString(signupObj.githubUsername, true) ||
      !isValidBoolean(signupObj.isDeveloper)
    ) {
      throw new Error("Unknown param");
    }

    const userExists = await UserRepo.findOne({ email: signupObj.email });
    const userNameExists = await UserRepo.findOne({
      username: signupObj.username,
    });
    if (userExists) {
      // TODO: Pass success in order to prevent enumeration
      throw new Error("User already exists");
    }
    if (userNameExists) {
      // TODO: Pass success in order to prevent enumeration
      throw new Error("Username already exists");
    }

    // Hash the password
    const hashedPassword = await hashPassword(signupObj.password);

    const roles = ["user"];
    if (signupObj.isDeveloper) {
      roles.push("developer");
    }
    // Generate a token for email verification
    const emailVerificationToken = generateToken();
    await sendVerificationEmail(signupObj.email, emailVerificationToken);

    // Save the user with hashed password
    const newUser = new UserRepo({
      email: signupObj.email,
      password: hashedPassword,
      username: signupObj.username,
      xUsername: signupObj.xUsername,
      discordUrl: signupObj.discordUrl,
      githubUsername: signupObj.githubUsername,
      emailVerificationToken,
      roles,
    });
    await newUser.save();

    const accessToken = generateAccessToken(newUser._id.toString());
    const refreshToken = generateRefreshToken(newUser._id.toString());

    await UserRepo.findOneAndUpdate(
      { email: signupObj.email },
      { refreshToken }
    );

    return { accessToken, refreshToken };
  },
  resendVerifyEmail: async (_: any, args: MutationResendVerifyEmailArgs) => {
    const { email } = args;
    if (!isValidString(email)) {
      throw new Error("Unknown param");
    }

    const user = await UserRepo.findOne({ email });

    if (!user) {
      return { message: "Not possible", error: true };
    }
    if (user.emailVerified) {
      return { message: "Not possible", error: true };
    }
    if (user.resendVerifyEmailAttempts >= 8) {
      return {
        message: "too many attempts, reach out to an human via Discord",
        error: true,
      };
    }

    await sendVerificationEmail(user.email, user.emailVerificationToken);

    user.resendVerifyEmailAttempts = user.resendVerifyEmailAttempts + 1;
    await user.save();

    return { message: "email re-sent" };
  },
  verifyEmail: async (_: any, args: MutationVerifyEmailArgs) => {
    const { emailVerificationToken } = args;
    if (!isValidString(emailVerificationToken)) {
      throw new Error("Unknown param");
    }

    const user = await UserRepo.findOne({
      emailVerificationToken,
      emailVerified: false,
    });
    if (!user) {
      return { message: "Token not valid", error: true };
    }

    user.emailVerified = true;
    await user.save();

    return { message: "Email verified" };
  },
  login: async (_: any, args: MutationLoginArgs) => {
    const { email, password } = args;
    if (!isValidString(email) || !isValidString(password)) {
      throw new Error("Unknown param");
    }

    // Check if user exists
    const user = await UserRepo.findOne({ email });
    if (!user) {
      throw new Error("User does not exist");
    }
    if (!user.emailVerified) {
      throw new Error("Email not verified");
    }

    // if (user.lockUntil && user.lockUntil > Date.now()) {
    //   throw new Error("Account is locked.");
    // }

    // Check if password is correct
    const isValid = await comparePassword(password, user.password);
    if (!isValid) {
      // user.loginAttempts += 1;
      // if (user.loginAttempts > 3) {
      //   user.lockUntil = Date.now() + 60 * 60 * 1000; // Lock for 1 hour
      // }
      // await user.save();
      throw new Error("Invalid password");
    }

    // Reset attempts and lock fields
    // user.loginAttempts = 0;
    // user.lockUntil = undefined;
    // await user.save();

    // Generate and return JWT
    // const token = jwt.sign({ id: user._id },  process.env.JWT_SECRET, { expiresIn: "1h" });
    const accessToken = generateAccessToken(user._id.toString());
    const refreshToken = generateRefreshToken(user._id.toString());

    await UserRepo.findOneAndUpdate({ email }, { refreshToken });

    return { accessToken, refreshToken };
  },
  requestResetPassword: async (
    _: any,
    args: MutationRequestResetPasswordArgs
  ) => {
    const { email } = args;
    if (!isValidString(email)) {
      throw new Error("Unknown params");
    }

    const user = await UserRepo.findOne({ email });

    if (!user) {
      // TODO: Pass success in order to prevent enumeration
      throw new Error("User not found");
    }

    const resetToken = generateToken();

    // Store this token in the DB associated with the user and set an expiry time
    user.resetPasswordToken = {
      token: resetToken,
      expiresAt: new Date(Date.now() + 60 * 60 * 2000), // Lock for 1 hour
    };
    await user.save();

    // Send this token via email to the user
    await sendResetPasswordEmail(user.email, resetToken);

    return { message: "Password reset email sent" };
  },
  updateResetPassword: async (
    _: any,
    args: MutationUpdateResetPasswordArgs
  ) => {
    const { resetToken, newPassword } = args;

    if (!isValidString(resetToken) || !isValidString(newPassword)) {
      throw new Error("Unknown params");
    }

    const user = await UserRepo.findOne({
      "resetPasswordToken.token": resetToken,
      "resetPasswordToken.expiresAt": { $gt: new Date() },
      "resetPasswordToken.usedAt": { $exists: false },
    });
    if (!user) {
      throw new Error("User not found");
    }

    const hashedPassword = await hashPassword(newPassword);

    // Store this token in the DB associated with the user and set an expiry time
    user.resetPasswordToken = user.resetPasswordToken ?? {};
    user.resetPasswordToken.usedAt = new Date();
    user.password = hashedPassword;
    await user.save();

    // Send this token via email to the user
    await sendPasswordUpdateSuccessEmail(user.email);

    return { message: "Password updated" };
  },
  updatePassword: async (
    _: any,
    args: MutationUpdatePasswordArgs,
    context: any
  ) => {
    const { oldPassword, newPassword } = args;
    const { accessToken } = context;
    const user = await isAuthenticated(accessToken);

    if (!isValidString(oldPassword) || !isValidString(newPassword)) {
      throw new Error("Unknown params");
    }

    const isValid = await comparePassword(oldPassword, user.password);
    if (!isValid) {
      throw new Error("Invalid password");
    }

    const hashedPassword = await hashPassword(newPassword);
    user.password = hashedPassword;
    await user.save();

    await sendPasswordUpdateSuccessEmail(user.email);

    return { message: "Password updated" };
  },
  refreshToken: async (
    _: any,
    args: MutationRefreshTokenArgs,
    context: any
  ) => {
    const { refreshToken: oldRefreshToken } = args;
    const { accessToken } = context;

    if (!isValidString(oldRefreshToken)) {
      throw new Error("Unknown params");
    }

    const user = await UserRepo.findOne({ refreshToken: oldRefreshToken });
    const decodedToken = verifyToken(accessToken);

    if (!user || user._id.toString() !== decodedToken.id) {
      throw new Error("Invalid tokens");
    }

    const newAccessToken = generateAccessToken(user._id.toString());
    const newRefreshToken = generateRefreshToken(user._id.toString());

    await UserRepo.findOneAndUpdate(
      { email: user.email },
      { refreshToken: newRefreshToken }
    );

    return { accessToken: newAccessToken, refreshToken: newRefreshToken };
  },
  logout: async (_: any, __: any, context: any) => {
    const { accessToken } = context;
    const user = await isAuthenticated(accessToken);

    if (!user) {
      throw new Error("Invalid refresh token");
    }

    // Invalidate the refresh token in the database
    (user.refreshToken as string | null) = null;
    await user.save();

    return { message: "Successfully logged out" };
  },
};
