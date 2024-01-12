import { Formik } from "formik";
import DarkInput from "../DarkInput";
import { Button } from "@nextui-org/react";
import { initialWhoamiForm } from "./util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FileUploader } from "react-drag-drop-files";
import "./style.css";
import { useState } from "react";
import { fileTypes } from "../Product/EditableAvatar";

export interface IWhoamiForm {
  bio: string;
  xUsername: string;
  githubUsername: string;
  discordUrl: string;
  file: any;
}

interface IWhoamiFormProps {
  onSubmit: (form: IWhoamiForm) => void;
  goBack: () => void;
}

export default function WhoamiForm({ onSubmit, goBack }: IWhoamiFormProps) {
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
      <div className="flex flex-col items-center justify-stretch gap-8 overflow-x-hidden">
        <Formik
          initialValues={initialWhoamiForm}
          onSubmit={(values, { setSubmitting }) => {
            onSubmit({ ...values, file: file });
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
                label="X username"
                variant="bordered"
                placeholder="X username"
                name="xUsername"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.xUsername}
              />
              <DarkInput
                startContent={<FontAwesomeIcon icon={faUser} />}
                label="Github username"
                variant="bordered"
                placeholder="Github username"
                type={"text"}
                name="githubUsername"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.githubUsername}
              />
              <DarkInput
                startContent={<FontAwesomeIcon icon={faUser} />}
                label="Discord link"
                variant="bordered"
                placeholder="Do you have a Discord server?"
                type={"text"}
                name="discordUrl"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.discordUrl}
              />
              <FileUploader
                handleChange={handleFileUpload}
                name="file"
                types={fileTypes}
                maxSize={2}
                classes="drag-and-drop w-full min-h-[80px]"
                label="Drop your profile picture here"
              />
              <div className="flex flex-row w-full gap-4">
                <Button
                  color="default"
                  variant="bordered"
                  className="w-full"
                  onClick={goBack}
                >
                  Go back
                </Button>
                <Button
                  color="primary"
                  className="w-full"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Register
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
}
