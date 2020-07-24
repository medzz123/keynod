import { gql } from 'apollo-server-express';

const partSchema = gql`
  extend type Query {
    parts(cursor: String, limit: Int): PartConnection! @auth(requires: AUTH)
    part(id: ID!): Part @auth(requires: AUTH)
  }

  extend type Mutation {
    createPart(input: CreatePartInput!): Part! @auth(requires: FOREPERSON)

    deletePart(id: ID!): Boolean! @auth(requires: FOREPERSON)
  }

  input CreatePartInput {
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

  type PartConnection {
    edges: [Part!]!
    pageInfo: PageInfo!
  }
`;

export default partSchema;
