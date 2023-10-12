import { Card, CardBody } from "@nextui-org/react";
import Comment from "./Comment";

interface IReviewsProps {
  reviews: any[];
}

export default function Reviews({ reviews }: IReviewsProps) {
  return (
    <div className="flex flex-col gap-4">
      <Comment index={0} />
      <Comment index={1} />
      <Comment index={2} />
    </div>
  );
}
