const { gql} = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    password: String
    victories: Int
  }`;

  module.exports = typeDefs