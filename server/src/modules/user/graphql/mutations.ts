import { type MutationUpdateUserArgs } from "@interfaces/graphql";
import { isValidString } from "@modules/util";
import { UserRepo } from "../UserModel";
import { isAuthenticated } from "@modules/auth/util";
import { IMG_KIND, uploadImage } from "@modules/util/uploadImage";

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
      !isValidString(userEdit.githubUrl, true)
    ) {
      throw new Error("Unknown param");
    }

    const updatedUser = await UserRepo.findOneAndUpdate(
      { _id: user.id },
      {
        $set: {
          ...(userEdit.username && { username: userEdit.username }),
          ...(userEdit.xUsername && { xUsername: userEdit.xUsername }),
          ...(userEdit.bio && { bio: userEdit.bio }),
          ...(userEdit.discordUrl && { discordUrl: userEdit.discordUrl }),
          ...(userEdit.githubUrl && { githubUrl: userEdit.githubUrl }),
        },
      },
      { new: true }
    );
    
    if(userEdit.profilePicture || userEdit.bannerPicture) {
      let uploadedProfilePictureURL;
      let uploadedBannerPictureURL ;
      if(userEdit.profilePicture) {uploadedProfilePictureURL = await uploadImage(userEdit.profilePicture, IMG_KIND.user_avatar)}
      if(userEdit.bannerPicture) {uploadedBannerPictureURL = await uploadImage(userEdit.profilePicture, IMG_KIND.user_banner)}
      const updatedUser = await UserRepo.findOneAndUpdate(
        { _id: user.id },
        {
          $set: {
            ...(uploadedProfilePictureURL && {
              profilePicture: uploadedProfilePictureURL,
            }),
            ...(uploadedBannerPictureURL && {
              bannerPicture: uploadedBannerPictureURL,
            }),
          },
        },
        { new: true }
      );
      return updatedUser;
    }

    return updatedUser;
  },
};
