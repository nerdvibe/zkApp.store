import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
  refreshToken: { type: String, default: null, nullable: true },
  emailVerificationToken: { type: String, required: true },
  loginAttempts: { type: Number, default: 0 },
  lockUntil: { type: Number },
  emailVerified: { type: Boolean, required: true, default: false },
  resetPasswordToken: {
    token: { type: String },
    expiresAt: { type: Date },
    usedAt: { type: Date },
  },
  username: { type: String, required: true, unique: true },
  followerCount: { type: Number, required: true, default: 0 },
  xUsername: { type: String },
  discordUrl: { type: String },
  githubUrl: { type: String },
  profilePicture: { type: String },
  bannerPicture: { type: String },
  role: { type: [String], required: true, default: ['user'] },
  resendVerifyEmailAttempts: { type: Number, default: 0 },
}, {timestamps: true});

export const UserRepo = mongoose.model("User", userSchema);

export type UserDoc = mongoose.InferSchemaType<typeof userSchema> & mongoose.Document;
