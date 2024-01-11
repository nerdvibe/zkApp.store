import { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";
dotenv.config();

const config: CodegenConfig = {
  generates: {
    "./src/gql/generated.tsx": {
      schema: process.env.VITE_GQL_SCHEMA,
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
