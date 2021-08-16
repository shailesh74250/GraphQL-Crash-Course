const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphql/shema/books.schema');
const resolvers = require('./graphql/resolver/books.resolver');



// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
