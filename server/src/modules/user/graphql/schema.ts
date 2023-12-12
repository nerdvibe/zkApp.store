export const schema = `
  type ZkAppUser {
    id: String
    name: String!
    slug: String!
    subtitle: String
    owner: String!
    body: String
    reviewScore: Float
    reviewCount: Float
    currentVersion: String!
    url: String!
    discordUrl: String
    githubUrl: String
    categorySlug: String
    icon: String
    bannerImage: String

    # TODO: Fix these two fields
    # createdAt: String
    # updatedAt: String
  }

  type UserWithZkApp {
    username: String!
    followerCount: Int
    xUsername: String
    discordUrl: String
    githubUrl: String
    profilePicture: String
    bannerPicture: String
    id: String
    zkApps: [ZkAppUser]
  }

  type User {
    username: String!
    followerCount: Int
    xUsername: String
    discordUrl: String
    githubUrl: String
    profilePicture: String
    bannerPicture: String
    id: String
  }

  type Query {
    user(username: String, id: String): UserWithZkApp @rateLimit(limit: 10, duration: 5)
    userSearch(username: String!): [User] @rateLimit(limit: 10, duration: 5)
    usersSortedByFollowers: [User] @rateLimit(limit: 10, duration: 5)
  }
`;
