import { type QueryUserArgs } from "@interfaces/graphql";
import { isValidString } from "@modules/util";
import { type UserDoc, UserRepo } from "../UserModel";

export const Query = {
  user: async (
    parent: any,
    args: QueryUserArgs
  ): Promise<Partial<UserDoc> | null> => {
    if (
      (!args.username && !args.id) || 
      (args.username && args.id) || 
      !isValidString(args.username, true) ||
      !isValidString(args.id, true)) {
      throw new Error("Unknown param");
    }

    const user = await UserRepo.findOne({
      ...(args.username && { username: args.username }),
      ...(args.id && { _id: args.id }),
      deleted: { $exists: false },
    });

    return user;
  },
};
