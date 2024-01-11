import { Card, CardBody } from "@nextui-org/react";
import NewUsersCharts from "./NewUsersCharts";

export default function NewUsersCard() {
  return (
    <Card className="w-full auth-card min-w-[250px] max-w-[600px]">
      <CardBody>
        <h1 className="text-2xl">Returning vs new users</h1>
        <div className="flex w-full justify-center">
          <NewUsersCharts />
        </div>
      </CardBody>
    </Card>
  );
}
