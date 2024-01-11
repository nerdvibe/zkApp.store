import { type ZkAppObject } from "../ZkAppModel";
import { UserRepo } from "@modules/user/UserModel";
import { ZkAppCategoriesRepo } from "@modules/zkAppCategories/ZkAppCategoriesModel";

export interface ZkAppWithCategoryGQL extends ZkAppObject {
  category?: {
    name: string;
    slug: string;
    zkAppCount: number;
  };
  ownerUsername?: string;
}
export const addCategoriesToZkAppArray = async (
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
