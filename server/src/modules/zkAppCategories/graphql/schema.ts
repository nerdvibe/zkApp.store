export const schema = `
  type ZkAppCategory {
    name: String!
    slug:  String!
    zkAppCount: Int
    topIcons: [String]
  }

  type Query {
    zkAppCategoriesSearch(text: String!, limit: Int, skip: Int): [ZkAppCategory] @rateLimit(limit: 15, duration: 10)
    zkAppCategories(limit: Int, skip: Int): [ZkAppCategory] @rateLimit(limit: 15, duration: 10)
  }
`;
