export const schema = `
  type ZkAppCategory {
    name: String!
    slug:  String!
    zkAppCount: Int
  }

  type Query {
    zkAppCategoriesSearch(text: String!): [ZkAppCategory] @rateLimit(limit: 15, duration: 10)
    zkAppCategories: [ZkAppCategory] @rateLimit(limit: 15, duration: 10)
  }
`;
