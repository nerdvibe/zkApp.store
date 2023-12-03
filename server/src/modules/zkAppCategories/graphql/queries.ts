import { type QueryZkAppCategoriesSearchArgs } from "@interfaces/graphql";
import { isValidString } from "@modules/util";
import {
  type ZkAppCategoriesDoc,
  ZkAppCategoriesRepo,
} from "../ZkAppCategoriesModel";

// TODO: make this query accept part of words (partials)
export const Query = {
  zkAppCategoriesSearch: async (
    parent: any,
    args: QueryZkAppCategoriesSearchArgs
  ): Promise<Partial<ZkAppCategoriesDoc[]>> => {
    if (!isValidString(args.text)) {
      throw new Error("Unknown param");
    }

    const categories = await ZkAppCategoriesRepo.find({
      $text: {
        $search: args.text,
      },
      deleted: { $exists: false },
    }).limit(10);

    return categories;
  },
};
