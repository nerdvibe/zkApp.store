import {
  type QueryZkAppArgs,
  type QueryZkAppsArgs,
  type QueryZkAppsByUserArgs,
  type QuerySearchZkAppByNameArgs,
  type QueryZkAppsByCategoryArgs,
  type ZkApp,
} from "@interfaces/graphql";
import { isValidArrayOfStrings, isValidBoolean, isValidNumber, isValidString } from "@modules/util";
import { type ZkAppObject, ZkAppRepo } from "../ZkAppModel";
import { ZkAppCategoriesRepo } from "@modules/zkAppCategories/ZkAppCategoriesModel";
import { UserRepo } from "@modules/user/UserModel";

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

    const user = await UserRepo.findOne(
      {
        _id: zkApp.owner,
      },
      { username: 1 }
    );

    return {
      id: zkApp._id.toString(),
      name: zkApp.name,
      slug: zkApp.slug,
      subtitle: zkApp.subtitle,
      owner: zkApp.owner,
      ownerUsername: user?.username,
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
      .limit(args.limit ?? DEFAULT_LIMIT)
      .lean();

    const zkAppsWithCategories = await addCategoriesToZkAppArray(zkApps);

    return flattenZkAppsDocArrayToGQL(zkAppsWithCategories);
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
      name:  { $regex: args.name, $options: 'i' },
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
      .limit(args.limit ?? DEFAULT_LIMIT)
      .lean();

    const zkAppsWithCategories = await addCategoriesToZkAppArray(zkApps);

    return flattenZkAppsDocArrayToGQL(zkAppsWithCategories);
  },
  zkApps: async (
    parent: any,
    { sortByFeatured, sortByTrending, skip, limit, slugs }: QueryZkAppsArgs
  ): Promise<ZkApp[]> => {
    if (
      !isValidNumber(limit, true) ||
      !isValidNumber(skip, true) ||
      !isValidBoolean(sortByFeatured, true) ||
      !isValidBoolean(sortByTrending, true) ||
      !isValidArrayOfStrings(slugs, true)
    ) {
      throw new Error("Unknown param");
    }

    let sorting = {};
    if (sortByFeatured) {
      sorting = { featured: "desc" };
    }
    if (sortByTrending) {
      sorting = { trending: "desc" };
    }

    const zkApps = await ZkAppRepo.find({
      deleted: { $exists: false },
      ...(slugs && {
        slug: {$in: slugs},
      })
    })
      .sort(sorting)
      .skip(skip ?? 0)
      .limit(limit ?? DEFAULT_LIMIT)
      .lean();

    const zkAppsWithCategories = await addCategoriesToZkAppArray(zkApps);

    return flattenZkAppsDocArrayToGQL(zkAppsWithCategories);
  },
};

interface ZkAppWithCategoryGQL extends ZkAppObject {
  category?: {
    name: string;
    slug: string;
    zkAppCount: number;
  };
  ownerUsername?: string;
}

const flattenZkAppsDocArrayToGQL = (
  zkApps: ZkAppWithCategoryGQL[]
): ZkApp[] => {
  return zkApps.map((zkApp) => {
    return {
      id: zkApp._id.toString(),
      name: zkApp.name,
      slug: zkApp.slug,
      subtitle: zkApp.subtitle,
      owner: zkApp.owner,
      ownerUsername: zkApp.ownerUsername,
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
      category: zkApp.category,
    };
  });
};

const addCategoriesToZkAppArray = async (
  zkApps: ZkAppObject[],
  ownerUsernameOverride?: string
): Promise<ZkAppWithCategoryGQL[]> => {
  const zkAppsWithCategories = [];

  // used to "cache" the category in order to save db queries
  const categories: Record<string, ZkAppWithCategoryGQL["category"]> = {};

  for (const zkApp of zkApps) {
    
    // fetch username
    let ownerUsername;
    if(ownerUsernameOverride) {
      ownerUsername = ownerUsernameOverride
    } else {
      const user = await UserRepo.findOne(
        {
          _id: zkApp.owner,
        },
        { username: 1 }
      );
      ownerUsername = user?.username
    }

    // fetch category, if it has already been found, use the "cached"
    if (categories[zkApp.slug]) {
      zkAppsWithCategories.push({
        ...zkApp,
        category: categories[zkApp.slug],
        ownerUsername
      });
      continue;
    }
    const category = await ZkAppCategoriesRepo.findOne({
      slug: zkApp.categorySlug,
    });
    if (!category) {
      continue;
    }
    const categorySanitized = {
      name: category.name,
      slug: category.slug,
      zkAppCount: category.zkAppCount,
    };
    categories[category.slug] = categorySanitized;

    zkAppsWithCategories.push({
      ...zkApp,
      category: categorySanitized,
      ownerUsername
    });
  }

  return zkAppsWithCategories;
};
