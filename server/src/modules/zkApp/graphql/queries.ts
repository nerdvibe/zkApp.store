import {
  type QueryZkAppArgs,
  type QueryZkAppsArgs,
  type QueryZkAppsByUserArgs,
  type QuerySearchZkAppByNameArgs,
  type QueryZkAppsByCategoryArgs,
  type ZkApp,
} from "@interfaces/graphql";
import { isValidBoolean, isValidNumber, isValidString } from "@modules/util";
import { type ZkAppDoc, ZkAppRepo } from "../ZkAppModel";
import { ZkAppCategoriesRepo } from "@modules/zkAppCategories/ZkAppCategoriesModel";

const DEFAULT_LIMIT = 10;

export const Query = {
  zkApp: async (parent: any, args: QueryZkAppArgs): Promise<ZkApp> => {
    if (!isValidString(args.slug)) {
      throw new Error("Unknown param");
    }

    const zkApp = await ZkAppRepo.findOne({
      slug: args.slug,
      deleted: { $exists: false },
    });

    if (!zkApp) {
      throw new Error("not found");
    }

    const zkAppCategory = await ZkAppCategoriesRepo.findOne({
      slug: zkApp.categorySlug,
    });

    return {
      id: zkApp._id.toString(),
      name: zkApp.name,
      slug: zkApp.slug,
      subtitle: zkApp.subtitle,
      owner: zkApp.owner,
      body: zkApp.body,
      reviewScore: zkApp.reviewScore,
      reviewCount: zkApp.reviewCount,
      currentVersion: zkApp.currentVersion,
      url: zkApp.url,
      discordUrl: zkApp.discordUrl,
      githubUrl: zkApp.githubUrl,
      categorySlug: zkApp.categorySlug,
      category: {
        name: zkAppCategory?.name,
        slug: zkAppCategory?.slug,
        zkAppCount: zkAppCategory?.zkAppCount,
      },
      icon: zkApp.icon,
      bannerImage: zkApp.bannerImage,
    };
  },
  zkAppsByUser: async (
    parent: any,
    args: QueryZkAppsByUserArgs
  ): Promise<ZkApp[]> => {
    if (
      !isValidString(args.userId) ||
      !isValidNumber(args.limit, true) ||
      !isValidNumber(args.skip, true)
    ) {
      throw new Error("Unknown param");
    }

    const zkApps = await ZkAppRepo.find({
      owner: args.userId,
      deleted: { $exists: false },
    })
      .skip(args.skip ?? 0)
      .limit(args.limit ?? DEFAULT_LIMIT);

    return flattenZkAppsDocArrayToGQL(zkApps);
  },
  searchZkAppByName: async (
    parent: any,
    args: QuerySearchZkAppByNameArgs
  ): Promise<ZkApp[]> => {
    if (
      !isValidString(args.name) ||
      !isValidNumber(args.limit, true) ||
      !isValidNumber(args.skip, true)
    ) {
      throw new Error("Unknown param");
    }
    const zkApps = await ZkAppRepo.find({
      $text: {
        $search: args.name,
      },
      deleted: { $exists: false },
    })
      .skip(args.skip ?? 0)
      .limit(args.limit ?? DEFAULT_LIMIT);

    return flattenZkAppsDocArrayToGQL(zkApps);
  },
  zkAppsByCategory: async (
    parent: any,
    args: QueryZkAppsByCategoryArgs
  ): Promise<ZkApp[]> => {
    if (
      !isValidString(args.categorySlug) ||
      !isValidNumber(args.limit, true) ||
      !isValidNumber(args.skip, true)
    ) {
      throw new Error("Unknown param");
    }

    const zkApps = await ZkAppRepo.find({
      categorySlug: args.categorySlug,
      deleted: { $exists: false },
    })
      .skip(args.skip ?? 0)
      .limit(args.limit ?? DEFAULT_LIMIT);

    return flattenZkAppsDocArrayToGQL(zkApps);
  },
  zkApps: async (
    parent: any,
    { sortByFeatured, skip, limit }: QueryZkAppsArgs
  ): Promise<ZkApp[]> => {
    if (
      !isValidNumber(limit, true) ||
      !isValidNumber(skip, true) ||
      !isValidBoolean(sortByFeatured, true)
    ) {
      throw new Error("Unknown param");
    }

    const zkApps = await ZkAppRepo.find({
      deleted: { $exists: false },
    })
      .sort(sortByFeatured ? { featured: "desc" } : {})
      .skip(skip ?? 0)
      .limit(limit ?? DEFAULT_LIMIT);

    return flattenZkAppsDocArrayToGQL(zkApps);
  },
};

const flattenZkAppsDocArrayToGQL = (zkApps: ZkAppDoc[]): ZkApp[] => {
  return zkApps.map((zkApp) => {
    return {
      id: zkApp._id.toString(),
      name: zkApp.name,
      slug: zkApp.slug,
      subtitle: zkApp.subtitle,
      owner: zkApp.owner,
      body: zkApp.body,
      reviewScore: zkApp.reviewScore,
      reviewCount: zkApp.reviewCount,
      currentVersion: zkApp.currentVersion,
      url: zkApp.url,
      discordUrl: zkApp.discordUrl,
      githubUrl: zkApp.githubUrl,
      categorySlug: zkApp.categorySlug,
      icon: zkApp.icon,
      bannerImage: zkApp.bannerImage,
      featured: zkApp.featured,
    };
  });
};
