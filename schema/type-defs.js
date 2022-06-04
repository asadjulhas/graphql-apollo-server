const { gql } = require('apollo-server')

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    userName: String!
    age: Int
    nationality: Nationality!
    friends: [User]
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
  }

  enum Nationality {
    USA
    BD
    Canada
    Bangladesh
    Brazil
  }


  `
module.exports = { typeDefs }