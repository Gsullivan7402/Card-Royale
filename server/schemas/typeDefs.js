const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    password: String
    victories: Int
  }
  
  type Query {
    me: User
    allUsers: [User]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser( email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    incrementVictories: User
}
`;

module.exports = typeDefs;