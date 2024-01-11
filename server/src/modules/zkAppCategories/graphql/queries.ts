import {
  QueryZkAppCategoriesBySlugArgs,
  type QueryZkAppCategoriesArgs,
  type QueryZkAppCategoriesSearchArgs,
} from "@interfaces/graphql";
import { isValidNumber, isValidString } from "@modules/util";
import {
  type ZkAppCategoriesDoc,
  ZkAppCategoriesRepo,
} from "../ZkAppCategoriesModel";

const DEFAULT_LIMIT = 10;

// TODO: make this query accept part of words (partials)
export const Query = {
  zkAppCategoriesSearch: async (
    parent: any,
    args: QueryZkAppCategoriesSearchArgs
  ): Promise<Partial<ZkAppCategoriesDoc[]>> => {
    if (
      !isValidString(args.text) ||
      !isValidNumber(args.limit, true) ||
      !isValidNumber(args.skip, true)
    ) {
      throw new Error("Unknown param");
    }

    const categories = await ZkAppCategoriesRepo.find({
      name: { $regex: args.text, $options: "i" },
      zkAppCount: { $gt: 0 },
      deleted: { $exists: false },
    })
      .skip(args.skip ?? 0)
      .limit(args.limit ?? DEFAULT_LIMIT)
      .sort({ zkAppCount: "desc" });

    return categories;
  },
  zkAppCategories: async (
    parent: any,
    args: QueryZkAppCategoriesArgs
  ): Promise<Partial<ZkAppCategoriesDoc[]>> => {
    if (!isValidNumber(args.limit, true) || !isValidNumber(args.skip, true)) {
      throw new Error("Unknown param");
    }

    const categories = await ZkAppCategoriesRepo.find({
      zkAppCount: { $gt: 0 },
      deleted: { $exists: false },
    })
      .skip(args.skip ?? 0)
      .limit(args.limit ?? DEFAULT_LIMIT)
      .sort({ zkAppCount: "desc" });

    return categories;
  },
  zkAppCategoriesBySlug: async (
    parent: any,
    args: QueryZkAppCategoriesBySlugArgs
  ): Promise<Partial<ZkAppCategoriesDoc | null>> => {
    if (
      !isValidString(args.slug) ||
      !isValidNumber(args.limit, true) ||
      !isValidNumber(args.skip, true)
    ) {
      throw new Error("Unknown param");
    }

    const categories = await ZkAppCategoriesRepo.findOne({
      slug: args.slug,
      deleted: { $exists: false },
    })
      .skip(args.skip ?? 0)
      .limit(args.limit ?? DEFAULT_LIMIT);

    return categories;
  },
};
