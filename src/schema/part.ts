import { gql } from 'apollo-server-express';

const partSchema = gql`
  extend type Query {
    parts: [Part!] @auth(requires: AUTH)
    part(id: ID!): Part @auth(requires: AUTH)
  }

  extend type Mutation {
    createPart(input: CreatePart!): Part! @auth(requires: FOREPERSON)

    updatePart(input: UpdatePart!): Part!
  }

  input UpdatePart {
    name: String
    quantity: Int
    price: String
    description: String
    threshold: Int
  }

  input CreatePart {
    name: String!
    quantity: Int!
    price: String!
    description: String!
    threshold: Int!
  }

  type Part {
    id: ID!
    name: String!
    quantity: Int!
    price: String!
    description: String!
    threshold: Int!
  }
`;

export default partSchema;
