const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphql/shema');
const Resolvers = require('./graphql/resolver/book.resolver');
const Users = require('./graphql/resolver/user.resolver');



// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers: Resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
