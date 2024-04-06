const typeDefs = `#graphql
  type Author {
    id: ID!
    name: String!
    novelId: String
  }

  type Novel {
    id: ID!
    title: String!
    image: String
    createdAt: String
    updatedAt: String
    authors: [Author]
  }

  type Query {
    novels: [Novel]
    novel(id: ID!): Novel
  }

  type Mutation {
    addNovel(title: String!, image: String): Novel
    updateNovel(id:ID! ,title: String, image: String): Novel
    deleteNovel(id: ID!): Novel
    addAuthor(novelId: ID!, name: String!): Author
  }
`;

export default typeDefs;
