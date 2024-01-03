import dotenv from "dotenv";
import "module-alias/register";
import mongoose from "mongoose";
import express from "express";
import stitchedSchema from "./graphql/schema";
import { isValidString } from "./modules/util";
import { useDisableIntrospection } from '@graphql-yoga/plugin-disable-introspection'
import { blockFieldSuggestionsPlugin } from '@escape.tech/graphql-armor-block-field-suggestions'
import { createYoga } from "graphql-yoga";
import { log } from "@modules/logger";
import helmet from "helmet";
import cors from "cors";

dotenv.config();
if (!process.env.MONGO_DB) {
  throw new Error("Missing MongoDB connection string");
}
void mongoose.connect(process.env.MONGO_DB);

const app = express();

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.use(cors());


let yoga;
if(process.env.NODE_ENV === 'development') {
  yoga = createYoga({
    schema: stitchedSchema,
    graphiql: true,
    context: ({ request }: any) => {
      const token = request.headers.get("authorization");
      if (!isValidString(token)) {
        return;
      }
      const accessToken = token.split(" ")[1];
  
      return { accessToken };
    },
  });
} else {
  yoga = createYoga({
    schema: stitchedSchema,
    graphiql: false,
    plugins: [useDisableIntrospection(), blockFieldSuggestionsPlugin()],
    context: ({ request }: any) => {
      const token = request.headers.get("authorization");
      if (!isValidString(token)) {
        return;
      }
      const accessToken = token.split(" ")[1];
  
      return { accessToken };
    },
  });
}

// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.use("/graphql", yoga);

app.listen(4000, () => {
  log.info("Server is running on port 4000");
});
