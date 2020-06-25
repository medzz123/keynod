import { gql } from 'apollo-server-express';

const partSchema = gql`
  extend type Query {
    parts(cursor: String, limit: Int): PartConnection!
    part(input: PartByIdInput!): Part
  }

  extend type Mutation {
    createPart(input: CreatePartInput!): Part!

    deletePart(input: DeletePartInput!): Boolean!
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
