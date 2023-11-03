import { type QueryZkAppCategoriesSearchArgs } from "@interfaces/graphql";
import { isValidString } from "@modules/util";
import { type ZkAppCategoriesDoc, ZkAppCategoriesRepo } from "../ZkAppCategoriesModel";

export const Query = {
  zkAppCategoriesSearch: async (
    parent: any,
    args: QueryZkAppCategoriesSearchArgs
  ): Promise<Partial<ZkAppCategoriesDoc>> => {
    if (!isValidString(args.text)) {
      throw new Error("Unknown param");
    }

    const categories = await ZkAppCategoriesRepo.find({
      name: args.text,
      deleted: { $exists: false },
    });

    if (!zkApp) {
      return {};
    }

    return {
      id: zkApp._id,
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
      category: zkApp.category,
      icon: zkApp.icon,
      bannerImage: zkApp.bannerImage,
      createdAt: zkApp.createdAt,
      updatedAt: zkApp.updatedAt,
    };
  },
};
