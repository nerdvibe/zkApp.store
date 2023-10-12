import { Formik } from "formik";
import { initialPublishAppForm } from "./util";
import DarkInput from "../DarkInput";
import { Button, Textarea } from "@nextui-org/react";
import { FileUploader } from "react-drag-drop-files";
import { fileTypes } from "../Registration/WhoamiForm";
import { useDispatch } from "react-redux";
import { updateAppDetails } from "../../store/publishApp";

export default function PublishApp() {
  const dispatch = useDispatch();
  const onSubmit = (value: any) => {
    alert(JSON.stringify(value));
  };

  const handleFormUpdate = (field: string, value: string) => {
    dispatch(updateAppDetails({ field, value }));
  };

  return (
    <div className="w-full p-8">
      <div className="flex flex-col items-center justify-stretch gap-8">
        <Formik
          initialValues={initialPublishAppForm}
          // validate={validateRegistration}
          onSubmit={(values, { setSubmitting }) => {
            onSubmit(values);
            setSubmitting(false);
          }}
        >
          {({
            isSubmitting,
            errors,
            touched,
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
                type="name"
                label="zkApp name"
                labelPlacement="outside"
                placeholder="Enter your zkApp name"
                name="name"
                onChange={(event) => {
                  handleFormUpdate("title", event.currentTarget.value);
                  handleChange(event);
                }}
                onBlur={handleBlur}
                value={values.name}
                errorMessage={errors.name && touched.name && errors.name}
              />
              <Textarea
                label="Description"
                labelPlacement="outside"
                name="description"
                placeholder="Enter your description"
                value={values.description}
                onBlur={handleBlur}
                onChange={(event) => {
                  handleFormUpdate("description", event.currentTarget.value);
                  handleChange(event);
                }}
                variant="flat"
              />
              <DarkInput
                type="text"
                label="Category"
                labelPlacement="outside"
                placeholder="Enter a category"
                name="category"
                onChange={(event) => {
                  handleFormUpdate("category", event.currentTarget.value);
                  handleChange(event);
                }}
                onBlur={handleBlur}
                value={values.category}
                errorMessage={
                  errors.category && touched.category && errors.category
                }
              />
              <DarkInput
                type="text"
                label="Version"
                labelPlacement="outside"
                placeholder="Enter your zkApp version"
                name="version"
                onChange={(event) => {
                  handleFormUpdate("version", event.currentTarget.value);
                  handleChange(event);
                }}
                onBlur={handleBlur}
                value={values.version}
                errorMessage={
                  errors.version && touched.version && errors.version
                }
              />
              <DarkInput
                label="Link"
                labelPlacement="outside"
                placeholder="Enter your zkApp link"
                type="text"
                name="link"
                onChange={(event) =>
                  handleFormUpdate("link", event.currentTarget.value)
                }
                onBlur={handleBlur}
                value={values.link}
                errorMessage={errors.link && touched.link && errors.link}
              />
              <FileUploader
                // handleChange={handleChange}
                name="file"
                types={fileTypes}
                classes="drag-and-drop w-full min-h-[100px]"
                label="Drop your zkApp banner here"
              />
              <Button
                color="primary"
                className="w-full"
                type="submit"
                disabled={isSubmitting}
              >
                Review
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
