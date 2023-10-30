import { Formik } from "formik";
import { initialPublishAppForm, newAppFormSchema } from "./util";
import DarkInput from "../DarkInput";
import { Accordion, AccordionItem, Button, Textarea } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { updateAppDetails } from "../../store/publishApp";
import AdditionalData from "./AdditionalData";
import { useCreateZkAppMutation } from "@/gql/generated";
import { toast } from "react-hot-toast";
import MDEditor from "@uiw/react-md-editor";

export default function PublishApp() {
  const dispatch = useDispatch();
  const [createZkApp] = useCreateZkAppMutation();
  const onSubmit = (value: any) => {
    const {
      name,
      version,
      slug,
      url,
      subtitle,
      body,
      category,
      discordUrl,
      githubUrl,
    } = value;
    toast.promise(
      createZkApp({
        variables: {
          zkApp: {
            name,
            currentVersion: version,
            slug,
            url,
            subtitle,
            body: body || undefined,
            category,
            discordUrl: discordUrl || undefined,
            githubUrl: githubUrl || undefined,
          },
        },
      }),
      {
        loading: "Creating app",
        success: <b>ZkApp created!</b>,
        error: (err) => <b>{err.message}</b>,
      }
    );
  };

  const handleFormUpdate = (field: string, value: string) => {
    dispatch(updateAppDetails({ field, value }));
  };

  return (
    <div className="w-full md:p-2">
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
            setFieldValue,
            handleSubmit,
          }) => (
            <form
              className="flex flex-row items-center justify-stretch gap-6 w-full max-h-[70vh] overflow-y-auto flex-wrap px-4 pb-6"
              onSubmit={handleSubmit}
            >
              {newAppFormSchema.main.map(
                ({
                  type,
                  name,
                  label,
                  placeholder,
                  error,
                  required,
                  small,
                }) => {
                  if (type === "INPUT") {
                    return (
                      <DarkInput
                        className={small ? "w-full lg:w-[47.5%]" : "w-full"}
                        type={name}
                        label={label}
                        labelPlacement="outside"
                        placeholder={placeholder}
                        name={name}
                        onChange={(event) => {
                          handleFormUpdate(name, event.currentTarget.value);
                          handleChange(event);
                        }}
                        onBlur={handleBlur}
                        value={values[name]}
                        errorMessage={
                          error &&
                          required &&
                          errors[name] &&
                          touched[name] &&
                          errors[name]
                        }
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
                        onChange={(event) => {
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
                          value={values[name]}
                          style={{ whiteSpace: "pre-wrap", background: "none" }}
                          onChange={(val) => {
                            handleFormUpdate(name, val);
                            handleChange(val);
                          }}
                        />
                      </div>
                    );
                  }
                }
              )}
              {/* <FileUploader
                // handleChange={handleChange}
                name="file"
                types={fileTypes}
                classes="drag-and-drop w-full min-h-[100px]"
                label="Drop your zkApp banner here"
              /> */}
              <Accordion>
                <AccordionItem
                  key="1"
                  aria-label="Additional details"
                  title="Additional details"
                >
                  <AdditionalData
                    handleFormUpdate={handleFormUpdate}
                    handleBlur={handleBlur}
                    values={values}
                    handleChange={handleChange}
                    setFieldValue={setFieldValue}
                  />
                </AccordionItem>
              </Accordion>
              <div className="w-full">
                <Button
                  color="primary"
                  className="w-full"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Publish ZkApp
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
