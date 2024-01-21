import { Textarea } from "@nextui-org/react";
import DarkInput from "../DarkInput";
import { newAppFormSchema } from "./util";
import MDEditor from "@uiw/react-md-editor";
import { ChangeEvent, useState } from "react";

interface Props {
  handleFormUpdate: (name: string, value: string) => void;
  handleBlur: (event: unknown) => void;
  handleChange: (event: unknown) => void;
  values: {
    [key: string]: string;
  };
  setFieldValue: (name: string, value: string) => void;
}

export default function AdditionalData({
  handleFormUpdate,
  handleBlur,
  handleChange,
  values,
  setFieldValue,
}: Props) {
  const [body, setBody] = useState("");
  return (
    <div className="px-4 pb-6 flex flex-col gap-4">
      {newAppFormSchema.accordion.map(({ type, name, label, placeholder }) => {
        if (type === "INPUT") {
          return (
            <DarkInput
              type={name}
              label={label}
              labelPlacement="outside"
              placeholder={placeholder}
              name={name}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                handleFormUpdate(name, event.currentTarget.value);
                handleChange(event);
              }}
              onBlur={handleBlur}
              value={values[name]}
            />
          );
        }
        if (type === "TEXT_AREA") {
          return (
            <Textarea
              label={label}
              labelPlacement="outside"
              name={name}
              placeholder={placeholder}
              value={values[name]}
              onBlur={handleBlur}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                handleFormUpdate(name, event.currentTarget.value);
                handleChange(event);
              }}
              variant="flat"
            />
          );
        }
        if (type === "MD") {
          return (
            <div data-color-mode="dark">
              <label className="text-sm">Description</label>
              <MDEditor
                className="mt-2 min-h-[400px]"
                value={body}
                style={{ whiteSpace: "pre-wrap", background: "none" }}
                onChange={(value) => {
                  setBody(value!);
                  handleFormUpdate(name, value!);
                  setFieldValue(name, value!);
                }}
              />
            </div>
          );
        }
      })}
    </div>
  );
}
