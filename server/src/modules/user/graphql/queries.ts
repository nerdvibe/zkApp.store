import {
  type SelfUser,
  type QueryUserArgs,
  type QueryUserSearchArgs,
  type UserWithZkApp,
} from "@interfaces/graphql";
import { isValidString } from "@modules/util";
import { type UserDoc, UserRepo, PUBLIC_USER_FIELDS } from "../UserModel";
import { ZkAppRepo } from "@modules/zkApp/ZkAppModel";
import { isAuthenticated } from "@modules/auth/util";
import { addCategoriesToZkAppArray } from "@modules/zkApp/lib/addCategoriesToZkAppArray";

export const Query = {
  user: async (
    parent: any,
    args: QueryUserArgs
  ): Promise<UserWithZkApp | null> => {
    if (
      (!args.username && !args.id) ||
      (args.username && args.id) ||
      !isValidString(args.username, true) ||
      !isValidString(args.id, true)
    ) {
      throw new Error("Unknown param");
    }

    const user = await UserRepo.findOne(
      {
        ...(args.username && { username: args.username }),
        ...(args.id && { _id: args.id }),
        deleted: { $exists: false },
      },
      PUBLIC_USER_FIELDS
    );

    if (!user) {
      return null;
    }

    const zkApps = await ZkAppRepo.find({
      owner: user.id,
      deleted: { $exists: false },
    }).lean();

    const zkAppsWithCategories = await addCategoriesToZkAppArray(zkApps);

    return {
      ...user.toJSON(),
      id: user._id.toString(),
      ...(zkAppsWithCategories && { zkApps: zkAppsWithCategories }),
    };
  },

  // TODO: make this query to accept partial text
  userSearch: async (
    parent: any,
    args: QueryUserSearchArgs
  ): Promise<Partial<UserDoc[]> | null> => {
    if (!isValidString(args.username)) {
      throw new Error("Unknown param");
    }

    const user = await UserRepo.find(
      {
        username: { $regex: args.username, $options: 'i' },
        deleted: { $exists: false },
      },
      PUBLIC_USER_FIELDS
    ).limit(10);

    return user;
  },

  usersSortedByFollowers: async (): Promise<Partial<UserDoc[]> | null> => {
    const user = await UserRepo.find(
      {
        deleted: { $exists: false },
      },
      PUBLIC_USER_FIELDS
    )
      .limit(10)
      .sort({ followerCount: "desc" });

    return user;
  },

  selfUser: async (parent: any, args: any, context: any): Promise<SelfUser> => {
    const { accessToken } = context;

    const user = await isAuthenticated(accessToken);

    
    return {
      email: user.email,
      id: user._id,
      emailVerified: user.emailVerified,
      username: user.username,
      followerCount: user.followerCount,
      xUsername: user.xUsername,
      discordUrl: user.discordUrl,
      githubUrl: user.githubUrl,
      profilePicture: user.profilePicture,
      bannerPicture: user.bannerPicture,
      bio: user.bio,
    };
  },
};
