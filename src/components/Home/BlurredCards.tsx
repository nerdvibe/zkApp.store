import { Spinner } from "@nextui-org/react";
import BlurredCard, { IBlurredCardProps } from "../BlurredCard";
import { useHeroBannerQuery } from "@/gql/generated_mock";

export default function BlurredCards() {
  const { data, loading, error } = useHeroBannerQuery();
  if (error) {
    return <></>;
  }
  return (
    <div className="flex gap-4">
      {loading && (
        <div className="min-h-[300px] flex justify-center items-center w-full">
          <Spinner />
        </div>
      )}
      {data?.allHomepages?.map((el: IBlurredCardProps) => (
        <BlurredCard {...el} key={el.title} />
      ))}
    </div>
  );
}
