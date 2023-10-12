import { Card, CardBody } from "@nextui-org/react";
import NewUsersCharts from "../../Charts/NewUsersCharts";

export default function Stats() {
  return (
    <div className="flex gap-4 w-full">
      <Card className="w-full bg-[#1D1932]">
        <CardBody>
          <h1 className="text-2xl">Review</h1>
        </CardBody>
      </Card>
      <Card className="w-full bg-[#1D1932]">
        <CardBody>
          <h1 className="text-2xl">Users</h1>
          <NewUsersCharts />
        </CardBody>
      </Card>
    </div>
  );
}
