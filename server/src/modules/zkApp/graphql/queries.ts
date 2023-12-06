import {
  type QueryZkAppArgs,
  type QueryZkAppsByUserArgs,
  type QuerySearchZkAppByNameArgs,
  type ZkApp,
} from "@interfaces/graphql";
import { isValidString } from "@modules/util";
import { type ZkAppDoc, ZkAppRepo } from "../ZkAppModel";

export const Query = {
  zkApp: async (
    parent: any,
    args: QueryZkAppArgs
  ): Promise<Partial<ZkAppDoc>> => {
    if (!isValidString(args.slug)) {
      throw new Error("Unknown param");
    }

    const zkApp = await ZkAppRepo.findOne({
      slug: args.slug,
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

    return zkApps;
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

    return zkApps;
  },
};
