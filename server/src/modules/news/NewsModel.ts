import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, index: true },
    body: { type: String, required: true },
    banner: { type: String },
    slug: { type: String, required: true },
    textPreview: { type: String, required: true },
    deleted: { type: Boolean },
  },
  { timestamps: true }
);

export const NewsRepo = mongoose.model("news", newsSchema);

export type NewsDoc = mongoose.InferSchemaType<typeof newsSchema> &
  mongoose.Document;
