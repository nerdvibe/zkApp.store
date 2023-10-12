import BlurredCard, { IBlurredCardProps } from "../BlurredCard";
import mock from "../../mocks/homepage.json";

export default function BlurredCards() {
  return (
    <div className="flex gap-4">
      {mock?.hero?.map((el: IBlurredCardProps) => (
        <BlurredCard {...el} key={el.title} />
      ))}
    </div>
  );
}
