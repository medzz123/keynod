import { gql } from 'apollo-server-express';

const partSchema = gql`
  extend type Query {
    parts(cursor: String, limit: Int): PartConnection! @auth(requires: AUTH)
    part(input: PartByIdInput!): Part @auth(requires: AUTH)
  }

  extend type Mutation {
    createPart(input: CreatePartInput!): Part! @auth(requires: FOREPERSON)

    deletePart(input: DeletePartInput!): Boolean! @auth(requires: FOREPERSON)
  }

  input CreatePartInput {
    name: String!
    quantity: Int!
    price: String!
    manufacturer: String!
    description: String!
    vehicleType: String!
    threshold: Int!
  }

  input DeletePartInput {
    id: ID!
  }

  input PartByIdInput {
    id: ID!
  }

  type Part {
    id: ID!
    name: String!
    quantity: Int!
    price: String!
    manufacturer: String!
    description: String!
    vehicleType: String!
    threshold: Int!
  }

  type PartConnection {
    edges: [Part!]!
    pageInfo: PageInfo!
  }
`;

export default partSchema;
