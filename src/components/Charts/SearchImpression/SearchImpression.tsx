import { Card, CardBody } from "@nextui-org/react";
import SearchImpressionChart from "./SearchImpressionChart";

export default function SearchImpression() {
  return (
    <Card className="w-full bg-[#1D1932] max-w-[600px]">
      <CardBody>
        <h1 className="text-2xl">Search Impression</h1>
        <SearchImpressionChart />
      </CardBody>
    </Card>
  );
}
