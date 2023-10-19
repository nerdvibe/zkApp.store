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
import UpdateModal, { IUpdateData } from "./UpdateModal";

export interface app {
  value: string;
  label: string;
  key: number;
}

interface IUpdateData {
  update: {
    title: string;
    version: string;
    description: string;
    key: string;
    app: app;
  };
  onEdit: (data: unknown) => void;
}

export default function UpdateCard({ update, onEdit }: IUpdateData) {
  const { title, version, description, app } = update;
  return (
    <Card className="auth-card max-w-[400px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col gap-1 px-2">
          <h1 className="font-bold text-xl">{title}</h1>
          <p className="text-small text-default-500">
            {app.label} - {version}
          </p>
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
          onClick={() => onEdit(update)}
        >
          Edit
        </Button>
      </CardFooter>
    </Card>
  );
}
