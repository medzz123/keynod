import { gql } from 'apollo-server-express';

const customerSchema = gql`
  extend type Query {
    customers: [Customer!] @auth(requires: RECEPTIONIST)
    customer(id: ID!): Customer @auth(requires: RECEPTIONIST)
  }

  extend type Mutation {
    createCustomer(input: CreateCustomer!): Customer!
      @auth(requires: RECEPTIONIST)

    deleteCustomer(id: ID!): Boolean! @auth(requires: FOREPERSON)
  }

  input CreateCustomer {
    name: String!
    phone: String
    email: String! @constraint(format: "email")
    address: String!
  }

  type Customer {
    id: ID!
    name: String!
    phone: String!
    email: String!
    address: String!
    vehicles: [Vehicle!]
    payments: [Payment!]
  }
`;

export default customerSchema;
