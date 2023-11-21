export const schema = `
  type User {
    username: String!
    followerCount: String
    xUsername: String
    discordUrl: String
    githubUrl: String
    profilePicture: String
    bannerPicture: String
    id: String!
  }

  type Query {
    user(username: String, id: String): User @rateLimit(limit: 10, duration: 5)
  }
`;
