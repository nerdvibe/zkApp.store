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
  const { id } = useParams();
  const { data, loading } = useReviewByProductQuery({
    variables: {
      product: id!,
    },
  });
  return (
    <div className="flex flex-col gap-4">
      {data?.allReviews ? (
        data?.allReviews?.map((review, index) => (
          <Comment {...review} index={index} />
        ))
      ) : loading ? (
        <Spinner label="Loading reviews" />
      ) : (
        <EmptyStateCard description="There are no reviews yet" image={radar} />
      )}
    </div>
  );
}
