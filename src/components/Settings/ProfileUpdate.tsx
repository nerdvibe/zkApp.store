import { Formik } from "formik";
import DarkInput from "../DarkInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { initialWhoamiForm } from "../Registration/util";
import { Button, Divider } from "@nextui-org/react";

export default function ProfileUpdate() {
  const onSubmit = (values: any) => {
    console.log("🚀 ~ file: ProfileUpdate.tsx:10 ~ onSubmit ~ values:", values);
  };
  return (
    <>
      <h1 className="text-2xl font-bold">
        <FontAwesomeIcon icon={faUser} /> Profile settings
      </h1>
      <Divider className="my-4" />
      <h3 className="text-lg mb-2">Change details</h3>
      <Formik
        initialValues={initialWhoamiForm}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, handleChange, handleBlur, values, handleSubmit }) => (
          <form
            className="flex flex-col items-center justify-stretch gap-6 w-full max-w-[500px] min-w-[250px]"
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
            <Button
              color="primary"
              className="w-full"
              type="submit"
              disabled={isSubmitting}
            >
              Update profile
            </Button>
          </form>
        )}
      </Formik>
    </>
  );
}
