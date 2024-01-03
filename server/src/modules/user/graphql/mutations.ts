import { type MutationUpdateUserArgs } from "@interfaces/graphql";
import { isValidString } from "@modules/util";
import { UserRepo } from "../UserModel";
import { isAuthenticated } from "@modules/auth/util";

export const Mutation = {
  updateUser: async (
    _: any,
    { userEdit }: MutationUpdateUserArgs,
    { accessToken }: any
  ) => {
    const user = await isAuthenticated(accessToken);
    if (!userEdit) {
      throw new Error("Missing update object");
    }
    if (
      !isValidString(userEdit.username, true) ||
      !isValidString(userEdit.xUsername, true) ||
      !isValidString(userEdit.bio, true) ||
      !isValidString(userEdit.discordUrl, true) ||
      !isValidString(userEdit.githubUrl, true) ||
      !isValidString(userEdit.profilePicture, true) ||
      !isValidString(userEdit.bannerPicture, true)
    ) {
      throw new Error("Unknown param");
    }

    console.log({ _id: user.id },
      {
        $set: {
          ...(userEdit.username && { username: userEdit.username }),
          ...(userEdit.xUsername && { xUsername: userEdit.xUsername }),
          ...(userEdit.bio && { bio: userEdit.bio }),
          ...(userEdit.discordUrl && { discordUrl: userEdit.discordUrl }),
          ...(userEdit.githubUrl && { githubUrl: userEdit.githubUrl }),
          ...(userEdit.profilePicture && {
            profilePicture: userEdit.profilePicture,
          }),
          ...(userEdit.bannerPicture && {
            bannerPicture: userEdit.bannerPicture,
          }),
        },
      });

    const updatedUser = await UserRepo.findOneAndUpdate(
      { _id: user.id },
      {
        $set: {
          ...(userEdit.username && { username: userEdit.username }),
          ...(userEdit.xUsername && { xUsername: userEdit.xUsername }),
          ...(userEdit.bio && { bio: userEdit.bio }),
          ...(userEdit.discordUrl && { discordUrl: userEdit.discordUrl }),
          ...(userEdit.githubUrl && { githubUrl: userEdit.githubUrl }),
          ...(userEdit.profilePicture && {
            profilePicture: userEdit.profilePicture,
          }),
          ...(userEdit.bannerPicture && {
            bannerPicture: userEdit.bannerPicture,
          }),
        },
      },
      { new: true }
    );

    return updatedUser;
  },
};
