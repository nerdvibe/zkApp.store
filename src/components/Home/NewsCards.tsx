import { ScrollShadow, Spinner } from "@nextui-org/react";
import BlurredCard, { IBlurredCardProps } from "../BlurredCard";
import { useLastNewsQuery } from "@/gql/generated";
import NewsModal from "../News/NewsModal";

export default function NewsCards() {
  const { data, error, loading } = useLastNewsQuery();
  if (error) {
    return <></>;
  }
  return (
    <div className="flex gap-4 justify-center">
      {loading && (
        <div className="min-h-[300px] flex justify-center items-center w-full">
          <Spinner />
        </div>
      )}
      <ScrollShadow className="flex flex-row gap-4">
        {data?.getLastNews
          ?.slice(0, 3)
          .map((el: IBlurredCardProps) => (
            <BlurredCard {...el} key={el.title} />
          ))}
      </ScrollShadow>
      <NewsModal />
    </div>
  );
}
