const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Query {
    test: [Book]
  }
`;
const books = [
  { title: `The Awakening`, author: `Kate Chopin` },
  { title: `City of Glass`, author: `Paul Auster` },
];

const resolvers = {
  Query: {
    test: () => books,
  },
};
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
