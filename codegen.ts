import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  generates: {
    "./src/gql/generated.tsx": {
      schema: "http://localhost:4000/graphql",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
        "typescript-resolvers",
      ],
      documents: ["src/**/*.graphql"],
      config: {
        withHooks: true,
      },
    },
  },
};

export default config;
