import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://192.168.3.125:4000/graphql",
  documents: ["src/**/*.graphql"],
  generates: {
    "./src/gql/generated.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
        "typescript-resolvers",
      ],
      config: {
        withHooks: true,
      },
    },
  },
};

export default config;
