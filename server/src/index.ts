import dotenv from "dotenv";
import "module-alias/register";
import mongoose from "mongoose";
import express from "express";
import stitchedSchema from "./graphql/schema";
import { isValidString } from "./modules/util";
import playground from "graphql-playground-middleware-express";
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

const yoga = createYoga({
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

// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.use("/graphql", yoga);
app.get("/playground", playground({ endpoint: "/graphql" }));

app.listen(4000, () => {
  log.info("Server is running on port 4000");
});
