import EmptyStateCard from "@/components/EmptyStateCard";
import Comment from "./Comment";
import radar from "@/assets/animations/radar.json";

interface IReviewsProps {
  reviews: unknown[];
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
