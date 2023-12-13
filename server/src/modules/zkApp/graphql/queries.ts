import {
  type QueryZkAppArgs,
  type QueryZkAppsByUserArgs,
  type QuerySearchZkAppByNameArgs,
  type QueryZkAppsByCategoryArgs,
  type ZkApp,
} from "@interfaces/graphql";
import { isValidString } from "@modules/util";
import { type ZkAppDoc, ZkAppRepo } from "../ZkAppModel";
import { ZkAppCategoriesRepo } from "@modules/zkAppCategories/ZkAppCategoriesModel";

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
    if (!isValidString(args.userId)) {
      throw new Error("Unknown param");
    }

    const zkApps = await ZkAppRepo.find({
      owner: args.userId,
      deleted: { $exists: false },
    });

    return flattenZkAppsDocArrayToGQL(zkApps);
  },
  searchZkAppByName: async (
    parent: any,
    args: QuerySearchZkAppByNameArgs
  ): Promise<ZkApp[]> => {
    if (!isValidString(args.name)) {
      throw new Error("Unknown param");
    }
    const zkApps = await ZkAppRepo.find({
      $text: {
        $search: args.name,
      },
      deleted: { $exists: false },
    }).limit(10);

    return flattenZkAppsDocArrayToGQL(zkApps);
  },
  zkAppsByCategory: async (
    parent: any,
    args: QueryZkAppsByCategoryArgs
  ): Promise<ZkApp[]> => {
    if (!isValidString(args.categorySlug)) {
      throw new Error("Unknown param");
    }

    const zkApps = await ZkAppRepo.find({
      categorySlug: args.categorySlug,
      deleted: { $exists: false },
    }).limit(10);

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
    };
  });
};
