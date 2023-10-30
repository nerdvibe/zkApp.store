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
      label: "zkAppName",
      placeholder: "Enter your zkApp name",
      type: "INPUT",
      required: true,
      error: true,
    },
    {
      name: "slug",
      label: "App identifier",
      placeholder: "Enter an app identifier",
      type: "INPUT",
      required: true,
      error: true,
    },
    {
      name: "url",
      label: "App URL",
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
      label: "Current version",
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
