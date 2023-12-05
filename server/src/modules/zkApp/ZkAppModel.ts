import mongoose from "mongoose";

const zkAppSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, index: true },
  slug: { type: String, required: true, unique: true, index: true },
  subtitle: { type: String },
  owner: { type: String, required: true },
  body: { type: String },
  reviewScore: { type: Number, max: 5 },
  reviewCount: {type: Number, default: 0},
  currentVersion: { type: String, required: true },
  url: { type: String, required: true },
  discordUrl: { type: String },
  githubUrl: { type: String },
  category: { type: String },
  icon: { type: String },
  bannerImage: { type: String },
  deleted: { type: Boolean },
}, {timestamps: true});

zkAppSchema.index({ name: 'text', });

export const ZkAppRepo = mongoose.model("ZkApp", zkAppSchema);

export type ZkAppDoc = mongoose.InferSchemaType<typeof zkAppSchema> & mongoose.Document;
