import { gql } from 'apollo-server-express';

const vehicleSchema = gql`
  extend type Query {
    vehicles: [Vehicle!] @auth(requires: RECEPTIONIST)
    vehicle(id: ID!): Vehicle @auth(requires: MECHANIC)
  }

  extend type Mutation {
    createVehicle(input: CreateVehicle!): Vehicle! @auth(requires: RECEPTIONIST)
  }

  input CreateVehicle {
    customerId: ID!
    model: String!
    yearsUsed: String!
  }

  type Vehicle {
    id: ID!
    yearsUsed: String!
    model: String!
    customer: Customer!
    jobs: [Job!]
  }
`;

export default vehicleSchema;
