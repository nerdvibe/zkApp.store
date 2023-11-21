import {
  type QueryUserArgs,
  type QueryUserSearchArgs,
  type UserWithZkApp,
} from "@interfaces/graphql";
import { isValidString } from "@modules/util";
import { type UserDoc, UserRepo, PUBLIC_USER_FIELDS } from "../UserModel";
import { ZkAppRepo } from "@modules/zkApp/ZkAppModel";

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
    });

    return {
      ...user.toJSON(),
      id: user._id.toString(),
      ...(zkApps && { zkApps }),
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
        $text: {
          $search: args.username,
        },
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
};
