import mongoose from "mongoose";

const zkAppCategoriesSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, index: true },
  slug: { type: String, required: true, unique: true, index: true },
  zkAppCount: { type: Number, required: true, default: 0 },
  deleted: { type: Boolean },
  topIcons: [{
    type: String
}]
}, {timestamps: true});

zkAppCategoriesSchema.index({ name: 'text', });

export const ZkAppCategoriesRepo = mongoose.model("ZkAppCategories", zkAppCategoriesSchema);

export type ZkAppCategoriesDoc = mongoose.InferSchemaType<typeof zkAppCategoriesSchema> & mongoose.Document;
