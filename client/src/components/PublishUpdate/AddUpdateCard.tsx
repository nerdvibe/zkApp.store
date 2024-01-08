import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Skeleton,
} from "@nextui-org/react";
import { useState } from "react";
import UpdateModal from "./UpdateModal";

export default function AddUpdateCard({
  setShowModal,
}: {
  setShowModal: () => void;
}) {
  return (
    <Card className=" bg-[none] w-[400px] border-dashed border-2 border-gray-600">
      <CardHeader className="flex gap-3 flex-col items-start">
        <Skeleton isLoaded className="w-4/5 rounded-lg">
          <div className="h-4 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton isLoaded className="w-1/5 rounded-lg">
          <div className="h-4 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
      </CardHeader>
      <Divider />
      <CardBody className="flex gap-3 flex-col items-start justify-center">
        <Skeleton isLoaded className="w-full rounded-lg">
          <div className="h-4 w-4/5 rounded-lg bg-default-300"></div>
        </Skeleton>
        <Skeleton isLoaded className="w-full rounded-lg">
          <div className="h-4 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
        <Skeleton isLoaded className="w-full rounded-lg">
          <div className="h-4 w-3/5 rounded-lg bg-default-300"></div>
        </Skeleton>
      </CardBody>
      <CardFooter>
        <Button
          color="success"
          className="w-full mx-10 text-white"
          onClick={setShowModal}
        >
          Add update
        </Button>
      </CardFooter>
    </Card>
  );
}
