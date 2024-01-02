export const schema = `
  type News {
    title: String!
    body:  String!
    banner: String!
  }

  type Query {
    getLastNews: [News]
  }
`;
