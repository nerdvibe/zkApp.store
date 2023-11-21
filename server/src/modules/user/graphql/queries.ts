import {
  type QueryUserArgs,
  type QueryUserSearchArgs,
  type UserWithZkApp,
} from "@interfaces/graphql";
import { isValidString } from "@modules/util";
import { type UserDoc, UserRepo, PUBLIC_USER_FIELDS } from "../UserModel";
// import { Query as ZkAppQueries } from "@modules/zkApp/graphql/queries";

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

    // if(user) {
    //   user.zkApp = await ZkAppQueries.zkApp({}, )
    // }

    return user;
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
