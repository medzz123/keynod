import { gql } from "apollo-server-express";

const vehicleSchema = gql`
  extend type Query {
    vehicles: [vehicle!]
    vehicle(id: ID!): vehicle
  }

  extend type Mutation {
    createVehicle(input: CreateVehicleInput!): vehicle! @auth(requires: USER)

    deleteVehicle(input: DeleteVehicleInput!): Boolean! @auth(requires: ADMIN)
  }

  input CreateVehicleInput {
    make: String!
    model: String!
    
  }

  input DeleteVehicleInput {
    id: ID!
  }

  type Vehicle {
    id: ID!
    name: String!
    contact: String
    phone: String
    email: String!
    lineOne: String!
    lineTwo: String
    city: String!
    country: String!
    postcode: String!
  }
`;

export default vehicleSchema;
