import { useFormik } from "formik";
import {
  initialPublishAppForm,
  newAppFormSchema,
  validatePublishApp,
} from "./util";
import DarkInput from "../DarkInput";
import {
  Accordion,
  AccordionItem,
  Button,
  Select,
  SelectItem,
  Spinner,
  Textarea,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { updateAppDetails } from "../../store/publishApp";
import AdditionalData from "./AdditionalData";
import {
  useAllZkAppCategoriesQuery,
  useCheckSlugMutation,
  useCreateZkAppMutation,
} from "@/gql/generated";
import { toast } from "react-hot-toast";
import MDEditor from "@uiw/react-md-editor";
import { useNavigate } from "react-router-dom";
import routes from "@/routes";
import { RootState } from "@/store/store";
import useDebounce from "@/hooks/useDebounce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faXmarkCircle,
} from "@fortawesome/free-regular-svg-icons";
import { useEffect } from "react";

export default function PublishApp() {
  const dispatch = useDispatch();
  const [createZkApp] = useCreateZkAppMutation();
  const navigate = useNavigate();
  const { data } = useAllZkAppCategoriesQuery();
  const category = useSelector((state: RootState) => state.publishApp.category);
  const [
    checkSlug,
    { loading: slugCheckLoading, data: isSlugOccupied, error: slugCheckError },
  ] = useCheckSlugMutation();
  const {
    isSubmitting,
    errors,
    touched,
    handleChange,
    handleBlur,
    values,
    setFieldValue,
    handleSubmit,
  } = useFormik({
    initialValues: initialPublishAppForm,
    validate: validatePublishApp,
    validateOnChange: true,
    onSubmit: (values, { setSubmitting }) => {
      onSubmit(values);
      setSubmitting(false);
    },
  });
  const debouncedSlug = useDebounce<string>(values?.slug, 500);

  const onSubmit = (value: any) => {
    const { name, version, slug, url, subtitle, body, discordUrl, githubUrl } =
      value;
    toast
      .promise(
        createZkApp({
          variables: {
            zkApp: {
              name,
              currentVersion: version,
              slug,
              url,
              subtitle: subtitle || undefined,
              body: body || undefined,
              categorySlug: category || undefined,
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
      )
      .then((data) => {
        navigate(`${routes.PRODUCT}/${data.data?.createZkApp.slug}`);
      });
  };

  const handleFormUpdate = (field: string, value: string) => {
    dispatch(updateAppDetails({ field, value }));
  };

  useEffect(() => {
    verifyUserSlug(debouncedSlug);
  }, [debouncedSlug]);

  const verifyUserSlug = async (slug: string) => {
    await checkSlug({ variables: { slug } });
  };

  const isSlugValid = !slugCheckError && !isSlugOccupied?.checkSlug;

  const slugEndIcon = () => {
    if (!debouncedSlug) {
      return <></>;
    }
    if ((debouncedSlug && slugCheckLoading) || values.slug !== debouncedSlug) {
      return <Spinner />;
    } else if (slugCheckError || isSlugOccupied?.checkSlug) {
      return <FontAwesomeIcon icon={faXmarkCircle} color="red" />;
    } else if (isSlugValid) {
      return <FontAwesomeIcon icon={faCircleCheck} color="green" />;
    }
  };

  return (
    <div className="w-full md:p-2">
      <div className="flex flex-col items-center justify-stretch gap-8">
        <form
          className="flex flex-row items-center justify-stretch gap-6 w-full max-h-[70vh] overflow-y-auto flex-wrap px-4 pb-6"
          onSubmit={handleSubmit}
        >
          {newAppFormSchema.main.map(
            ({ type, name, label, placeholder, error, required, small }) => {
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
              if (type === "SLUG_INPUT") {
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
                      touched[name] &&
                      (values[name] && !isSlugValid
                        ? `${values.slug} already used, please select another one`
                        : errors[name])
                    }
                    endContent={slugEndIcon()}
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
              if (type === "CATEGORY") {
                return (
                  <div
                    className={`${
                      small ? "w-full lg:w-[47.5%]" : "w-full"
                    } mt-6`}
                  >
                    <Select
                      label={label}
                      variant="flat"
                      labelPlacement="outside"
                      className="w-full"
                      onBlur={handleBlur}
                      onChange={(val) => {
                        handleFormUpdate(name, val.target.value);
                        handleChange(val.target.value);
                      }}
                      value={values[name]}
                    >
                      {data?.zkAppCategories?.map((category) => (
                        <SelectItem key={category.slug} value={category.slug}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                );
              }
            }
          )}
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
      </div>
    </div>
  );
}
