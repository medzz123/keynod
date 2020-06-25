import { gql } from 'apollo-server-express';

const customerSchema = gql`
  extend type Query {
    customers: [Customer!] @auth(requires: RECEPTIONIST)
    customer(id: ID!): Customer @auth(requires: RECEPTIONIST)
  }

  extend type Mutation {
    createCustomer(input: CreateCustomer!): Customer!
      @auth(requires: RECEPTIONIST)

    deleteCustomer(input: DeleteCustomer!): Boolean! @auth(requires: FOREPERSON)
  }

  input CreateCustomer {
    name: String!
    contact: String
    phone: String
    email: String! @constraint(format: "email")
    lineOne: String!
    lineTwo: String
    city: String!
    country: String!
    postcode: String!
  }

  input DeleteCustomer {
    id: ID!
  }

  type Customer {
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
    vehicles: [Vehicle!]
  }
`;

export default customerSchema;
