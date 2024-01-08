import { Card, CardBody } from "@nextui-org/react";
import ProfileUpdate from "./ProfileUpdate";

export default function Profile() {
  return (
    <div className="w-full">
      <Card>
        <CardBody className="pb-10 pt-6">
          <ProfileUpdate />
        </CardBody>
      </Card>
    </div>
  );
}
