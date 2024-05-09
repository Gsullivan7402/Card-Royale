const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    password: String
    victories: Int
  }
  
  type Query {
    me: User
  }

  type Mutation {
    addUser: User
    login(email: String, password: String): User
    incrementVictories: User
  }
`;

module.exports = typeDefs;
