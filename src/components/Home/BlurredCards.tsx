import { Spinner } from "@nextui-org/react";
import BlurredCard, { IBlurredCardProps } from "../BlurredCard";

export default function BlurredCards() {
  const data = undefined,
    loading = undefined,
    error = undefined;
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
      {data?.map((el: IBlurredCardProps) => (
        <BlurredCard {...el} key={el.title} />
      ))}
    </div>
  );
}
