import { type GraphQLSchema } from "graphql";
import { stitchSchemas } from "@graphql-tools/stitch";
import { schema as authSchema } from "../modules/auth/graphql"; // Import your existing auth schema
import { schema as zkAppSchema } from "../modules/zkApp/graphql"; // Import your existing auth schema
import { schema as zkAppCategoriesSchema } from "../modules/zkAppCategories/graphql"; // Import your existing auth schema

const stitchedSchema: GraphQLSchema = stitchSchemas({
  subschemas: [
    { schema: authSchema },
    { schema: zkAppSchema },
    { schema: zkAppCategoriesSchema }
  ],
});

export default stitchedSchema;
