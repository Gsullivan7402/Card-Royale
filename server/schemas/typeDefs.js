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

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser: (username: String!, email: String!, Password: String!) Auth
    login(email: String!, password: String!): Auth
    incrementVictories: User
  }
`;

module.exports = typeDefs;