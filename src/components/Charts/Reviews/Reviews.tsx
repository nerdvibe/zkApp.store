import { Card, CardBody } from "@nextui-org/react";
import ReviewsCharts from "./ReviewsCharts";

export default function Reviews() {
  return (
    <Card className="w-full bg-[#1D1932] max-w-[600px]">
      <CardBody>
        <h1 className="text-2xl">Review</h1>
        <ReviewsCharts />
      </CardBody>
    </Card>
  );
}
