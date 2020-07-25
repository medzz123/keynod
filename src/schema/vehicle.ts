import { gql } from 'apollo-server-express';

const vehicleSchema = gql`
  extend type Query {
    vehicles(cursor: String, limit: Int): VehicleConnection!
      @auth(requires: RECEPTIONIST)
    vehicle(id: ID!): Vehicle @auth(requires: MECHANIC)
  }

  extend type Mutation {
    createVehicle(input: CreateVehicle!): Vehicle! @auth(requires: RECEPTIONIST)

    deleteVehicle(id: ID!): Boolean! @auth(requires: RECEPTIONIST)
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

  type VehicleConnection {
    edges: [Vehicle!]!
    pageInfo: PageInfo!
  }
`;

export default vehicleSchema;
