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

  type Services {
    id: ID!
    name: String!
    price: Int!
    img: String
    desc: String
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    services:[Services!]!
    service(id: ID!): Services!
    
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