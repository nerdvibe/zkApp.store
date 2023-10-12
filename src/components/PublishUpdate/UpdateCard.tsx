import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  ScrollShadow,
} from "@nextui-org/react";
import { useState } from "react";
import UpdateModal from "./UpdateModal";

const mock = {
  title: "CyberpunKYC v4.0: Simplified Inte...",
  version: "v4.0.1",
  description: `We are thrilled to announce the release of CyberpunKYC version 4.0,
  designed to simplify integration and enhance scalability for
  businesses of all sizes. With streamlined APIs and robust
  infrastructure, this update empowers organizations to seamlessly
  integrate CyberpunKYC into their existing systems and handle
  high-volume verification requests with ease`,
  key: 1,
};

export default function UpdateCard() {
  const { title, version, description } = mock;
  const [showModal, setShowModal] = useState(false);
  return (
    <Card className="max-w-[600px] bg-[#1D1932] min-w-[400px]">
      <UpdateModal
        toggleModal={() => setShowModal(!showModal)}
        show={showModal}
        data={mock}
      />
      <CardHeader className="flex gap-3">
        <div className="flex flex-col gap-1 px-2">
          <h1 className="font-bold text-xl">{title}</h1>
          <p className="text-small text-default-500">{version}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <ScrollShadow className="h-[100px] px-2">
          <p>
            {description} {/* <span>... Show more</span> */}
          </p>
        </ScrollShadow>
      </CardBody>
      <CardFooter className="w-full justify-end">
        <Button
          color="primary"
          className="min-w-[100px]"
          onClick={() => setShowModal(true)}
        >
          Edit
        </Button>
      </CardFooter>
    </Card>
  );
}
