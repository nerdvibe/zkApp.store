import { ZkAppRepo } from "../ZkAppModel";
import { ZkAppCategoriesRepo } from "@modules/zkAppCategories/ZkAppCategoriesModel";
import { log } from "@modules/logger";

export const countZkAppsCategory = async (): Promise<void> => {
  const aggregationPipeline = [
    {
      $group: {
        _id: "$categorySlug",
        count: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0,
        categorySlug: "$_id",
        count: 1,
      },
    },
  ];
  try {
    const result = await ZkAppRepo.aggregate(aggregationPipeline);

    const categoryCountObject = result.reduce((acc, item) => {
      acc[item.categorySlug] = item.count;
      return acc;
    }, {});

    for (const category of Object.keys(categoryCountObject)) {
      await ZkAppCategoriesRepo.updateOne(
        {
          slug: category,
        },
        { zkAppCount: categoryCountObject[category] }
      );
    }
  } catch (err) {
    log.error(`Error during aggregation: ${err}`);
  }
};
