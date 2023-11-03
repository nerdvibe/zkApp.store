export const schema = `
  type ZkAppCategory {
    name: String!
    zkAppCount: Int
  }

  type Query {
    zkAppCategoriesSearch(text: String!): [ZkAppCategory] @rateLimit(limit: 15, duration: 10)
  }
`;
