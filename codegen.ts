import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  // schema: "http://localhost:3000/graphql",
  // documents: ["src/**/*.graphql"],
  generates: {
    "./src/gql/generated.tsx": {
      schema: "http://localhost:4000/graphql",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
        "typescript-resolvers",
      ],
      documents: ["src/**/session.graphql"],
      config: {
        withHooks: true,
      },
    },
    // "./src/gql/generated_mock.tsx": {
    //   schema: "http://localhost:3000/graphql",
    //   documents: ["src/**/mock.graphql"],
    //   plugins: [
    //     "typescript",
    //     "typescript-operations",
    //     "typescript-react-apollo",
    //     "typescript-resolvers",
    //   ],
    //   config: {
    //     withHooks: true,
    //   },
    // },
  },
};

export default config;
