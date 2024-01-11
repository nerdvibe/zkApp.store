import { type GraphQLSchema } from "graphql";
import { stitchSchemas } from "@graphql-tools/stitch";
import { schema as authSchema } from "../modules/auth/graphql"; // Import your existing auth schema
import { schema as zkAppSchema } from "../modules/zkApp/graphql"; // Import your existing auth schema
import { schema as zkAppCategoriesSchema } from "../modules/zkAppCategories/graphql"; // Import your existing auth schema
import { schema as userSchema } from "../modules/user/graphql"; // Import your existing auth schema
import { schema as newsSchema } from "../modules/news/graphql"; // Import your existing auth schema

const stitchedSchema: GraphQLSchema = stitchSchemas({
  subschemas: [
    { schema: userSchema },
    { schema: authSchema },
    { schema: zkAppSchema },
    { schema: zkAppCategoriesSchema },
    { schema: newsSchema }
  ],
});

export default stitchedSchema;
