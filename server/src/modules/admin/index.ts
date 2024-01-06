import AdminBro from "admin-bro";
import bcrypt from "bcrypt";
import AdminBroExpress from "@admin-bro/express";
import AdminBroMongoose from "@admin-bro/mongoose";
import { ZkAppRepo } from "@modules/zkApp/ZkAppModel";
import { NewsRepo } from "@modules/news/NewsModel";
import { UserRepo } from "@modules/user/UserModel";
import { ZkAppCategoriesRepo } from "@modules/zkAppCategories/ZkAppCategoriesModel";

export const createAdmin = (): any => {
  AdminBro.registerAdapter(AdminBroMongoose);
  const admin = new AdminBro({
    resources: [ZkAppRepo, NewsRepo, UserRepo, ZkAppCategoriesRepo],
    rootPath: "/admin",
  });
  return admin;
};

export const createAdminRouter = (adminBro: any): any => {
  if (!process.env.COOKIE_SECRET_PASSWORD_ADMIN) {
    throw new Error(
      "COOKIE_SECRET_PASSWORD_ADMIN is not defined in environment variables"
    );
  }
  return AdminBroExpress.buildAuthenticatedRouter(adminBro, {
    authenticate: async (email, password) => {
      const user = await UserRepo.findOne({ email });
      if (user) {
        const matched = await bcrypt.compare(password, user.password);
        if (matched && user.role.includes("admin")) {
          return user;
        }
      }
      return false;
    },
    cookiePassword: process.env.COOKIE_SECRET_PASSWORD_ADMIN,
  });
};
