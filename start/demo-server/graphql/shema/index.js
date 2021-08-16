const { gql } = require('apollo-server');
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type User {
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    photo: String,
    gender: String
  }
  type Query {
    books: [Book]
    users: [User]
  }
`;

module.exports = typeDefs;
