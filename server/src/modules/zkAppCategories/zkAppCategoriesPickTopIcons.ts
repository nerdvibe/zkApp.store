import { ZkAppRepo } from "@modules/zkApp/ZkAppModel";
import { ZkAppCategoriesRepo } from "./ZkAppCategoriesModel";

export const zkAppCategoriesPickTopIcons = async (): Promise<void> => {
  const categories = await ZkAppCategoriesRepo.find({
    deleted: { $exists: false },
  });

  for (const category of categories) {
    const zkApps = await ZkAppRepo.find(
      {
        categorySlug: category.slug,
        icon: { $exists: true },
        deleted: { $exists: false },
      },
      { icon: 1 }
    )
      .sort({ featured: "desc" })
      .limit(5);

    console.log(zkApps);
    if (!zkApps.length) {
      continue;
    }
    const topIcons = zkApps
      .map((zkApp) => zkApp.icon)
      .filter((value) => value !== undefined);
    category.topIcons = topIcons as string[];
    await category.save();
  }
};
