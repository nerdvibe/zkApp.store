import { ScrollShadow, Spinner } from "@nextui-org/react";
import BlurredCard from "../BlurredCard";
import { useLastNewsQuery } from "@/gql/generated";
import NewsModal from "../News/NewsModal";
import { useEffect, useState } from "react";

export interface INews {
  __typename?: "News" | undefined;
  title: string;
  body: string;
  banner: string;
  textPreview: string;
  slug: string;
  ctaLink?: string | null | undefined;
}

export default function NewsCards() {
  const [renderNews, setRenderNews] = useState<INews[]>([]);
  const { data, error, loading } = useLastNewsQuery();
  useEffect(() => {
    if (data?.getLastNews) {
      const news = [...data.getLastNews];
      const reversedNews = news.reverse().slice(0, 3);
      setRenderNews(reversedNews as INews[]);
    }
  }, [data]);

  if (error) {
    return <></>;
  }
  return (
    <div className="flex gap-4 justify-center">
      {loading ? (
        <div className="min-h-[300px] flex justify-center items-center w-full">
          <Spinner />
        </div>
      ) : (
        <ScrollShadow className="flex flex-row gap-4">
          {renderNews.map((el: INews) => (
            <BlurredCard {...el} key={el.title} />
          ))}
        </ScrollShadow>
      )}
      <NewsModal />
    </div>
  );
}
