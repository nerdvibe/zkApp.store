import { isValidSlug, isValidVersion } from "@/util/validation";

export const initialPublishAppForm = {
  name: "",
  slug: "",
  subtitle: "",
  body: "",
  category: "",
  version: "",
  image: "",
  url: "",
  discordUrl: "",
  githubUrl: "",
};

export const newAppFormSchema = {
  main: [
    {
      name: "name",
      label: "ZkApp Name *",
      placeholder: "Enter your zkApp name",
      type: "INPUT",
      required: true,
      error: true,
    },
    {
      name: "slug",
      label: "App identifier *",
      placeholder: "Enter an app identifier",
      type: "INPUT",
      required: true,
      error: true,
    },
    {
      name: "url",
      label: "App URL *",
      placeholder: "Enter an URL",
      type: "INPUT",
      required: true,
      error: true,
    },
    {
      name: "subtitle",
      label: "Subtitle",
      placeholder: "Enter a subtitle",
      type: "INPUT",
    },
    {
      name: "version",
      label: "Current version *",
      placeholder: "Enter current app version",
      type: "INPUT",
      required: true,
      error: true,
      small: true,
    },
    {
      name: "category",
      label: "Category",
      placeholder: "Enter a category",
      type: "INPUT",
      small: true,
    },
  ],
  accordion: [
    {
      name: "body",
      label: "App description",
      placeholder: "Enter the app description",
      type: "MD",
    },
    {
      name: "discordUrl",
      label: "Discord",
      placeholder: "Discord url",
      type: "INPUT",
    },
    {
      name: "githubUrl",
      label: "Github",
      placeholder: "Github url",
      type: "INPUT",
    },
  ],
};

export const validatePublishApp = (values: any) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (!EMAIL_REGEX.test(values.name)) {
    errors.name = "Invalid email address";
  }
  if (!values.slug) {
    errors.slug = "Required";
  }
  if (!isValidSlug(values.slug)) {
    errors.slug =
      "App identifier can contain only characters, numbers and hyphen";
  }
  if (!values.version) {
    errors.version = "Required";
  }
  if (!isValidVersion(values.version)) {
    errors.version =
      "Version must follow this form X.Y.Z and it can contain only numbers";
  }
  if (!values.url) {
    errors.url = "Required";
  }
  if (!URL_REGEX.test(values.url)) {
    errors.url = "Insert a valid link";
  }
  return errors;
};

export const URL_REGEX =
  /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
