import { gql } from "apollo-server-express";

const vehicleSchema = gql`
  extend type Query {
    vehicles(cursor: String, limit: Int): VehicleConnection!
    vehicle(input: VehicleByIdInput!): Vehicle
  }

  extend type Mutation {
    createVehicle(input: CreateVehicleInput!): Vehicle!

    deleteVehicle(input: DeleteVehicleInput!): Boolean!
  }

  input CreateVehicleInput {
    customerId: ID!
    make: String!
    model: String!
    regNo: ID!
    yearsUsed: String!
    color: String!
  }

  input DeleteVehicleInput {
    regNo: ID!
  }

  input VehicleByIdInput {
    regNo: ID!
  }

  type Vehicle {
    make: String!
    model: String!
    regNo: ID!
    yearsUsed: String!
    color: String!
    customer: Customer!
  }

  type VehicleConnection {
    edges: [Vehicle!]!
    pageInfo: PageInfo!
  }
`;

export default vehicleSchema;
