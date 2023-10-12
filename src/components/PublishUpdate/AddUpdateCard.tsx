import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import { useState } from "react";
import UpdateModal from "./UpdateModal";

export default function AddUpdateCard() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Card className="w-[600px] bg-[#1D1932] min-w-[400px]">
      <UpdateModal
        add
        show={showModal}
        toggleModal={() => setShowModal(!showModal)}
      />
      <CardHeader className="flex gap-3 flex-col items-start">
        <div className="h-6 w-full rounded-lg bg-slate-500 opacity-50" />
        <div className="w-3/4 h-4 rounded-lg bg-slate-500 opacity-50" />
      </CardHeader>
      <Divider />
      <CardBody className="flex gap-3 flex-col items-start justify-center">
        <div className="h-4 w-full rounded-lg bg-slate-500 opacity-50" />
        <div className="h-4 w-full rounded-lg bg-slate-500 opacity-50" />
        <div className="h-4 w-full rounded-lg bg-slate-500 opacity-50" />
      </CardBody>
      <CardFooter>
        <Button
          color="success"
          className="w-full mx-10 text-white"
          onClick={() => setShowModal(true)}
        >
          Add update
        </Button>
      </CardFooter>
    </Card>
  );
}
