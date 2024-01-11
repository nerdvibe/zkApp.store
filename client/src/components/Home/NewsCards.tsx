import { ScrollShadow, Spinner } from "@nextui-org/react";
import BlurredCard, { IBlurredCardProps } from "../BlurredCard";
import { useLastNewsQuery } from "@/gql/generated";
import NewsModal from "../News/NewsModal";
import { useEffect, useState } from "react";

export default function NewsCards() {
  const [renderNews, setRenderNews] = useState([]);
  const { data, error, loading } = useLastNewsQuery();
  useEffect(() => {
    if (data?.getLastNews) {
      const news = [...data.getLastNews];
      const reversedNews = news.reverse().slice(0, 3);
      setRenderNews(reversedNews);
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
          {renderNews.map((el: IBlurredCardProps) => (
            <BlurredCard {...el} key={el.title} />
          ))}
        </ScrollShadow>
      )}
      <NewsModal />
    </div>
  );
}
