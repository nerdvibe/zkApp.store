import { Formik } from "formik";
import DarkInput from "../DarkInput";
import { Button } from "@nextui-org/react";
import { initialWhoamiForm } from "./util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FileUploader } from "react-drag-drop-files";
import "./style.css";
import { useState } from "react";

export interface IWhoamiForm {
  bio: string;
  twitter: string;
  github: string;
  discord: string;
  file: any;
}

interface IWhoamiFormProps {
  onSubmit: (form: IWhoamiForm) => void;
}

export const fileTypes = ["JPG", "PNG", "GIF"];

export default function WhoamiForm({ onSubmit }: IWhoamiFormProps) {
  const [file, setFile] = useState(null);
  const handleFileUpload = (file) => {
    setFile(file);
  };
  return (
    <>
      <h1 className="text-4xl ">Whoami</h1>
      <div>
        <p>Tell a bit about yourself</p>
      </div>
      <div className="flex flex-col items-center justify-stretch gap-8">
        <Formik
          initialValues={initialWhoamiForm}
          onSubmit={(values, { setSubmitting }) => {
            onSubmit(values);
            setSubmitting(false);
          }}
        >
          {({
            isSubmitting,
            handleChange,
            handleBlur,
            values,
            handleSubmit,
          }) => (
            <form
              className="flex flex-col items-center justify-stretch gap-6 w-full"
              onSubmit={handleSubmit}
            >
              <DarkInput
                startContent={<FontAwesomeIcon icon={faUser} />}
                type="bio"
                label="Bio"
                variant="bordered"
                placeholder="Enter a short bio about yourself"
                name="bio"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.bio}
              />
              <DarkInput
                startContent={<FontAwesomeIcon icon={faUser} />}
                type="text"
                label="Twitter"
                variant="bordered"
                placeholder="Twitter username"
                name="twitter"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.twitter}
              />
              <DarkInput
                startContent={<FontAwesomeIcon icon={faUser} />}
                label="Github"
                variant="bordered"
                placeholder="Github username"
                type={"text"}
                name="github"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.github}
              />
              <DarkInput
                startContent={<FontAwesomeIcon icon={faUser} />}
                label="Discord"
                variant="bordered"
                placeholder="Do you have a Discord server?"
                type={"text"}
                name="discord"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.discord}
              />
              <FileUploader
                handleChange={handleChange}
                name="file"
                types={fileTypes}
                classes="drag-and-drop w-full min-h-[80px]"
                label="Drop your profile picture here"
              />
              <Button
                color="primary"
                className="w-full"
                type="submit"
                disabled={isSubmitting}
              >
                Register
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
}
