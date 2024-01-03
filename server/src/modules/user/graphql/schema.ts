export const schema = `

  input UpdateUserInput {
    username: String
    xUsername: String
    bio: String
    discordUrl: String
    githubUrl: String
    profilePicture: String
    bannerPicture: String
  }

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
    bio: String
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
    bio: String
    id: String
  }


  type SelfUser {
    id: String!
    email: String!
    username: String!
    emailVerified: Boolean!
    followerCount: Int
    xUsername: String
    discordUrl: String
    githubUrl: String
    bio: String
    profilePicture: String
    bannerPicture: String
  }

  type Query {
    user(username: String, id: String): UserWithZkApp @rateLimit(limit: 10, duration: 5)
    userSearch(username: String!): [User] @rateLimit(limit: 10, duration: 5)
    usersSortedByFollowers: [User] @rateLimit(limit: 10, duration: 5)
    selfUser: SelfUser @rateLimit(limit: 40, duration: 20)
  }

  type Mutation {
    updateUser(userEdit: UpdateUserInput): SelfUser @rateLimit(limit: 10, duration: 5)
  }
`;
