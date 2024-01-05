import { NewsRepo, type NewsDoc } from "../NewsModel";
import { type QueryGetNewsArgs } from "@interfaces/graphql";
import { isValidString } from "@modules/util";

const DEFAULT_LIMIT = 10;

export const Query = {
  getLastNews: async (): Promise<Partial<NewsDoc[]>> => {
    const news = await NewsRepo.find({
      deleted: { $exists: false },
    })
      .sort({ createdAt: -1 })
      .limit(DEFAULT_LIMIT);

    return news;
  },
  getNews: async (
    parent: any,
    args: QueryGetNewsArgs
  ): Promise<Partial<NewsDoc | null>> => {
    if (!isValidString(args.slug)) {
      throw new Error("Unknown param");
    }

    const news = await NewsRepo.findOne({
      slug: args.slug,
      deleted: { $exists: false },
    })
      .sort({ createdAt: -1 })
      .limit(DEFAULT_LIMIT);

    return news;
  },
};
