export const schema = `
  scalar File

  input CreateZkApp {
    name: String!
    slug: String!
    currentVersion: String!
    url: String!
    subtitle: String
    body: String
    discordUrl: String
    githubUrl: String
    categorySlug: String
    icon: File
    bannerImage: File
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
    categorySlug: String
    icon: File
    bannerImage: File
  }

  type ZkAppCategoryZkApp {
    name: String
    slug: String
    zkAppCount: Int
  }

  type ZkApp {
    id: String!
    name: String!
    slug: String!
    subtitle: String
    owner: String!
    ownerUsername: String
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
    category: ZkAppCategoryZkApp
    featured: Int
    trending: Int

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
    zkApp(slug: String!): ZkApp @rateLimit(limit: 50, duration: 60)
    zkApps(sortByFeatured: Boolean, sortByTrending: Boolean, skip: Int, limit: Int, slugs: [String]): [ZkApp] @rateLimit(limit: 50, duration: 60)
    zkAppsByUser(userId: String!, limit: Int, skip: Int): [ZkApp] @rateLimit(limit: 50, duration: 60)
    searchZkAppByName(name: String!, limit: Int, skip: Int): [ZkApp] @rateLimit(limit: 50, duration: 60)
    zkAppsByCategory(categorySlug: String!, limit: Int, skip: Int): [ZkApp] @rateLimit(limit: 50, duration: 60)
  }


  type Mutation {
    createZkApp(zkApp: CreateZkApp!): ZkApp! @rateLimit(limit: 15, duration: 60)
    updateZkApp(zkApp: updateZkApp!): ZkApp! @rateLimit(limit: 15, duration: 60)
    deleteZkApp(id: String!): Boolean! @rateLimit(limit: 15, duration: 60)
    
    checkSlug(slug: String!): Boolean! @rateLimit(limit: 15, duration: 60) 
  }
`;
