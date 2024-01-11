import {
  type MutationUpdateZkAppArgs,
  type MutationCheckSlugArgs,
  type MutationCreateZkAppArgs,
  type MutationDeleteZkAppArgs,
} from "@interfaces/graphql";
import { isValidString } from "@modules/util";
import { ZkAppRepo } from "../ZkAppModel";
import { isAuthenticated } from "@modules/auth/util";
import { isValidSlug, isValidVersion } from "../utils";
import { IMG_KIND, uploadImage } from "@modules/util/uploadImage";

export const Mutation = {
  checkSlug: async (
    _: any,
    { slug }: MutationCheckSlugArgs,
    { accessToken }: any
  ) => {
    await isAuthenticated(accessToken);
    if (!isValidString(slug)) {
      throw new Error("Unknown param");
    }

    const foundZkApp = await ZkAppRepo.findOne({ slug });

    return !!foundZkApp;
  },
  createZkApp: async (
    _: any,
    { zkApp }: MutationCreateZkAppArgs,
    { accessToken }: any
  ) => {
    const user = await isAuthenticated(accessToken);
    if (
      !isValidString(zkApp.name) ||
      !isValidString(zkApp.slug) ||
      !isValidString(zkApp.currentVersion) ||
      !isValidString(zkApp.url) ||
      !isValidString(zkApp.categorySlug) ||
      !isValidString(zkApp.subtitle, true) ||
      !isValidString(zkApp.body, true) ||
      !isValidString(zkApp.discordUrl, true) ||
      !isValidString(zkApp.githubUrl, true)
    ) {
      throw new Error("Unknown param");
    }

    if (!isValidSlug(zkApp.slug)) {
      throw new Error("Slug not valid");
    }

    if (!isValidVersion(zkApp.currentVersion)) {
      throw new Error("Version not valid");
    }

    const foundZkAppSlug = await ZkAppRepo.findOne({ slug: zkApp.slug });
    if (foundZkAppSlug) {
      throw new Error("Slug already existing");
    }

    const foundZkAppName = await ZkAppRepo.findOne({ slug: zkApp.slug });
    if (foundZkAppName) {
      throw new Error("Name already existing");
    }

    const createdZkApp = await ZkAppRepo.create({
      name: zkApp.name,
      slug: zkApp.slug,
      currentVersion: zkApp.currentVersion,
      url: zkApp.url,
      owner: user._id,
      ...(zkApp.subtitle && { subtitle: zkApp.subtitle }),
      ...(zkApp.body && { body: zkApp.body }),
      ...(zkApp.discordUrl && { discordUrl: zkApp.discordUrl }),
      ...(zkApp.githubUrl && { githubUrl: zkApp.githubUrl }),
      ...(zkApp.categorySlug && { categorySlug: zkApp.categorySlug }),
    });

    if (zkApp.icon || zkApp.bannerImage) {
      let uploadedIconURL;
      let uploadedBannerPictureURL;
      if (zkApp.icon) {
        uploadedIconURL = await uploadImage(zkApp.icon, IMG_KIND.zkapp_icon);
      }
      if (zkApp.bannerImage) {
        uploadedBannerPictureURL = await uploadImage(
          zkApp.bannerImage,
          IMG_KIND.zkapp_banner
        );
      }
      const updatedZkApp = await ZkAppRepo.findOneAndUpdate(
        { _id: user.id },
        {
          $set: {
            ...(uploadedIconURL && {
              icon: uploadedIconURL,
            }),
            ...(uploadedBannerPictureURL && {
              bannerPicture: uploadedBannerPictureURL,
            }),
          },
        },
        { new: true }
      );
      return updatedZkApp;
    }

    return createdZkApp;
  },
  updateZkApp: async (
    _: any,
    { zkApp }: MutationUpdateZkAppArgs,
    { accessToken }: any
  ) => {
    const user = await isAuthenticated(accessToken);
    if (
      !isValidString(zkApp.id) ||
      !isValidString(zkApp.name, true) ||
      !isValidString(zkApp.currentVersion, true) ||
      !isValidString(zkApp.url, true) ||
      !isValidString(zkApp.subtitle, true) ||
      !isValidString(zkApp.body, true) ||
      !isValidString(zkApp.discordUrl, true) ||
      !isValidString(zkApp.githubUrl, true) ||
      !isValidString(zkApp.categorySlug, true)
    ) {
      throw new Error("Unknown param");
    }

    if (zkApp.currentVersion && !isValidVersion(zkApp.currentVersion)) {
      throw new Error("Version not valid");
    }

    const foundZkAppId = await ZkAppRepo.findOne({
      _id: zkApp.id,
      owner: user._id,
    });
    if (!foundZkAppId) {
      throw new Error("ZkApp not found");
    }

    const updatedZkApp = await ZkAppRepo.findOneAndUpdate(
      { _id: zkApp.id, owner: user._id },
      {
        $set: {
          ...(zkApp.name && { name: zkApp.name }),
          ...(zkApp.currentVersion && { currentVersion: zkApp.currentVersion }),
          ...(zkApp.url && { url: zkApp.url }),
          ...(zkApp.subtitle && { subtitle: zkApp.subtitle }),
          ...(zkApp.body && { body: zkApp.body }),
          ...(zkApp.discordUrl && { discordUrl: zkApp.discordUrl }),
          ...(zkApp.githubUrl && { githubUrl: zkApp.githubUrl }),
          ...(zkApp.categorySlug && { categorySlug: zkApp.categorySlug }),
        },
      },
      { new: true }
    );

    if (zkApp.icon || zkApp.bannerImage) {
      let uploadedIconURL;
      let uploadedBannerPictureURL;
      if (zkApp.icon) {
        uploadedIconURL = await uploadImage(zkApp.icon, IMG_KIND.zkapp_icon);
      }
      if (zkApp.bannerImage) {
        uploadedBannerPictureURL = await uploadImage(
          zkApp.bannerImage,
          IMG_KIND.zkapp_banner
        );
      }
      const updatedZkApp = await ZkAppRepo.findOneAndUpdate(
        { _id: zkApp.id, owner: user._id },
        {
          $set: {
            ...(uploadedIconURL && {
              icon: uploadedIconURL,
            }),
            ...(uploadedBannerPictureURL && {
              bannerImage: uploadedBannerPictureURL,
            }),
          },
        },
        { new: true }
      );

      return updatedZkApp;
    }

    return updatedZkApp;
  },
  deleteZkApp: async (
    _: any,
    { id }: MutationDeleteZkAppArgs,
    { accessToken }: any
  ) => {
    const user = await isAuthenticated(accessToken);
    if (!isValidString(id)) {
      throw new Error("Unknown param");
    }

    const foundZkApp = await ZkAppRepo.findOne({ _id: id, owner: user._id });

    if (!foundZkApp) {
      return false;
    }

    foundZkApp.slug = `deleted-${+new Date()}-${foundZkApp.slug}`;
    foundZkApp.name = `deleted-${+new Date()}-${foundZkApp.name}`;
    foundZkApp.deleted = true;

    await foundZkApp.save();

    return true;
  },
};
