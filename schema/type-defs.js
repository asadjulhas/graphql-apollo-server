const { gql } = require('apollo-server')

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    userName: String!
    age: Int
    nationality: Nationality!
    friends: [User]
    favService: [Services]
  }

  type Services {
    id: ID!
    name: String!
    price: Int!
    img: String
    desc: String
    isAvailable: Boolean!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    services:[Services!]!
    service(id: ID!): Services!
    available(isAvailable: Boolean!): [Services]!
    
  }

  input userCreateInput {
    name: String!
    userName: String!
    age: Int = 18
    nationality: Nationality = BD
  }

  input createServiceInput {
    name: String!
    price: Int!
    img: String
    desc: String
    isAvailable: Boolean!
  }

  type Mutation {
    createUser(input: userCreateInput!): User
    createService(input: createServiceInput!): Services
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