import { gql } from 'apollo-server-express';

const vehicleSchema = gql`
  extend type Query {
    vehicles(cursor: String, limit: Int): VehicleConnection!
      @auth(requires: RECEPTIONIST)
    vehicle(input: VehicleByIdInput!): Vehicle @auth(requires: MECHANIC)
  }

  extend type Mutation {
    createVehicle(input: CreateVehicleInput!): Vehicle!
      @auth(requires: RECEPTIONIST)

    deleteVehicle(input: DeleteVehicleInput!): Boolean!
      @auth(requires: RECEPTIONIST)
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
