export const schema = `
  type News {
    title: String!
    body:  String!
    banner: String!
    slug: String!
    textPreview: String!
  }

  type Query {
    getLastNews: [News]
  }
`;
