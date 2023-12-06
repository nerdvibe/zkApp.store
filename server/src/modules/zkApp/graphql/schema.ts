export const schema = `
  input CreateZkApp {
    name: String!
    slug: String!
    currentVersion: String!
    url: String!
    subtitle: String
    body: String
    discordUrl: String
    githubUrl: String
    category: String
    icon: String
    bannerImage: String
  }
  input updateZkApp {
    id: String!
    name: String
    currentVersion: String
    url: String
    subtitle: String
    body: String
    discordUrl: String
    githubUrl: String
    category: String
    icon: String
    bannerImage: String
  }

  type ZkApp {
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
    category: String
    icon: String
    bannerImage: String

    # TODO: Fix these two fields
    # createdAt: String
    # updatedAt: String
  }

  type Token {
    accessToken: String!
    refreshToken: String!
  }
  type Message {
    message: String!
    error: Boolean
  }

  type Query {
    zkApp(slug: String!): ZkApp @rateLimit(limit: 3, duration: 60)
    zkAppsByUser(userId: String!): [ZkApp] @rateLimit(limit: 15, duration: 60)
    searchZkAppByName(name: String!): [ZkApp] @rateLimit(limit: 15, duration: 60)
  }


  type Mutation {
    createZkApp(zkApp: CreateZkApp!): ZkApp! @rateLimit(limit: 15, duration: 60)
    updateZkApp(zkApp: updateZkApp!): ZkApp! @rateLimit(limit: 15, duration: 60)
    deleteZkApp(id: String!): Boolean! @rateLimit(limit: 15, duration: 60)
    
    checkSlug(slug: String!): Boolean! @rateLimit(limit: 15, duration: 60) 
  }
`;
