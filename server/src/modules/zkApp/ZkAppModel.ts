import mongoose from "mongoose";

export interface ZkAppObject {
  _id: mongoose.Types.ObjectId;
  name: string;
  slug: string;
  subtitle?: string;
  owner: string;
  body?: string;
  reviewScore?: number;
  reviewCount?: number;
  currentVersion: string;
  url: string;
  discordUrl?: string;
  githubUrl?: string;
  categorySlug: string;
  icon?: string;
  bannerImage?: string;
  featured?: number;
  trending?: number;
  deleted?: boolean;
}

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
  categorySlug: { type: String, required: true },
  icon: { type: String },
  bannerImage: { type: String },
  featured: { type: Number, default: undefined },
  trending: { type: Number, default: undefined },
  deleted: { type: Boolean },
}, {timestamps: true});

zkAppSchema.index({ name: 'text', });

export const ZkAppRepo = mongoose.model("ZkApp", zkAppSchema);

export type ZkAppDoc = mongoose.InferSchemaType<typeof zkAppSchema> & mongoose.Document;
