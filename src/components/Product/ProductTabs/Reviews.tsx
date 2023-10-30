import EmptyStateCard from "@/components/EmptyStateCard";
import Comment from "./Comment";
import radar from "@/assets/animations/radar.json";
import { useReviewByProductQuery } from "@/gql/generated_mock";
import { useParams } from "react-router-dom";
import { Spinner } from "@nextui-org/react";

interface IReviewsProps {
  reviews: any[];
}

export default function Reviews({ reviews }: IReviewsProps) {
  return (
    <div className="flex flex-col gap-4">
      {reviews ? (
        reviews.map((review, index) => <Comment {...review} index={index} />)
      ) : (
        <EmptyStateCard description="There are no reviews yet" image={radar} />
      )}
    </div>
  );
}
