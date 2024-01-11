import { makeExecutableSchema } from "@graphql-tools/schema";
import { schema as typeDefs } from "./schema";
import { Mutation } from "./mutations";
import { rateLimitDirective } from "graphql-rate-limit-directive";

const { rateLimitDirectiveTypeDefs, rateLimitDirectiveTransformer } = rateLimitDirective();

export const schema = rateLimitDirectiveTransformer(makeExecutableSchema({
  typeDefs: [ rateLimitDirectiveTypeDefs, typeDefs],
  resolvers: {
    Mutation,
  },
}));
