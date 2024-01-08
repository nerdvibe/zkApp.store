import { Card, CardBody } from "@nextui-org/react";
import ReviewsCharts from "./ReviewsCharts";

export default function Reviews({ reviews }: any) {
  return (
    <Card className="w-full auth-card max-w-[600px]">
      <CardBody>
        <h1 className="text-2xl">Review</h1>
        <ReviewsCharts data={reviews} />
      </CardBody>
    </Card>
  );
}
