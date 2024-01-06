export const schema = `
  type News {
    title: String!
    body:  String!
    banner: String!
    slug: String!
    textPreview: String!
    ctaLink: String
  }

  type Query {
    getLastNews: [News]
    getNews(slug: String!): News
  }
`;
