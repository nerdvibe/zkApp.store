import { isAuthenticated } from "../util";

export const Query = {
  publicInfo: () => {
    return "This is public information";
  },
  userDetails: async (parent: any, args: any, context: any) => {
    const { accessToken } = context;

    const user = await isAuthenticated(accessToken);
    return {
      email: user.email,
      id: user._id,
      emailVerified: user.emailVerified,
    };
  },
};
