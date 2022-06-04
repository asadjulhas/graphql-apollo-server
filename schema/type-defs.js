const { gql } = require('apollo-server')

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    userName: String!
    age: Int
    nationality: String!
  }

  type Query {
    users: [User!]!
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