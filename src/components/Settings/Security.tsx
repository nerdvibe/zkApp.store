import { Card, CardBody } from "@nextui-org/react";
import ChangePassword from "./ChangePassword";

export default function Security() {
  return (
    <div className="w-full">
      <Card>
        <CardBody className="pb-10 pt-6">
          <ChangePassword />
        </CardBody>
      </Card>
    </div>
  );
}
