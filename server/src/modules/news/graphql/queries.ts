import {
  NewsRepo,
  type NewsDoc,
} from "../NewsModel";

const DEFAULT_LIMIT = 10;

export const Query = {
  getLastNews: async (): Promise<Partial<NewsDoc[]>> => {

    const news = await NewsRepo.find({
      deleted: { $exists: false },
    })
    .sort({createdAt: -1})
    .limit(DEFAULT_LIMIT);

    return news;
  },
};
