import * as crypto from "crypto";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {type UserDoc, UserRepo} from "../user/UserModel";

interface JwtPayload {
  id: string;
}

export const generateAccessToken = (_id: string): string => {
  if (!process.env.JWT_ACCESS_TOKEN) {
    throw new Error('JWT_ACCESS_TOKEN is not defined in environment variables');
  }
  return jwt.sign({ id: _id }, process.env.JWT_ACCESS_TOKEN, { expiresIn: "1h" });
}
export const generateRefreshToken = (_id: string): string => {
  if (!process.env.JWT_REFRESH_TOKEN) {
    throw new Error('JWT access token is not defined in the environment variables.');
  }
  return jwt.sign({ id: _id }, process.env.JWT_REFRESH_TOKEN, { expiresIn: "7d" });
}
export const verifyToken = (accessToken: string):JwtPayload => {
  if (!process.env.JWT_ACCESS_TOKEN) {
    throw new Error('JWT access token is not defined in the environment variables.');
  }
  return jwt.verify(accessToken, process.env.JWT_ACCESS_TOKEN) as unknown as JwtPayload;
};

export const hashPassword = async (password: string): Promise<string> => {
  if (!isPasswordSafe(password)) {
    throw new Error(
      "The password is not safe. Please choose a stronger password."
    );
  }

  // Hash the password
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  return hashedPassword;
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};

export const isAuthenticated = async (accessToken: string): Promise<UserDoc> => {
  if (!accessToken) {
    throw new Error("No authentication token provided");
  }

  const decoded = verifyToken(accessToken);
  const user = await UserRepo.findOne({ _id: decoded.id });
  if (!user) {
    throw new Error("User not found");
  }
  if (!user.emailVerified) {
    throw new Error("Email not verified");
  }

  return user;
};


export const generateToken = ():string => {
  return crypto.randomBytes(20).toString("hex");
};

export const isPasswordSafe = (password: string):boolean => {
  // Check for minimum length
  if (password.length < 6) {
    return false;
  }

  // Check for lowercase letter
  if (!/[a-z]/.test(password)) {
    return false;
  }

  // Check for uppercase letter
  if (!/[A-Z]/.test(password)) {
    return false;
  }

  // Check for digit
  if (!/[0-9]/.test(password)) {
    return false;
  }

  // Check for special character
  // eslint-disable-next-line no-useless-escape
  const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (!specialCharacters.test(password)) {
    return false;
  }

  return true;
};
