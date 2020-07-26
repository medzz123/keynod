import { gql } from 'apollo-server-express';

const vehicleSchema = gql`
  extend type Query {
    vehicles: [Vehicle!]
    vehicle(id: ID!): Vehicle
  }

  extend type Mutation {
    createVehicle(input: CreateVehicle!): Vehicle!
  }

  input CreateVehicle {
    customerId: ID!
    model: String!
    yearsUsed: String!
    regNo: ID!
  }

  type Vehicle {
    regNo: ID!
    yearsUsed: String!
    model: String!
    customer: Customer!
    jobs: [Job!]
  }
`;

export default vehicleSchema;
