import { gql } from 'apollo-server-express';

const customerSchema = gql`
  extend type Query {
    customers: [Customer!]
    customer(id: ID!): Customer
  }

  extend type Mutation {
    createCustomer(input: CreateCustomer!): Customer!
  }

  input CreateCustomer {
    name: String!
    phone: String!
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
