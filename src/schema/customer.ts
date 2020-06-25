import { gql } from 'apollo-server-express';

const customerSchema = gql`
  extend type Query {
    customers: [Customer!]
    customer(id: ID!): Customer
  }

  extend type Mutation {
    createCustomer(input: CreateCustomerInput!): Customer! @auth(requires: USER)

    deleteCustomer(input: DeleteCustomerInput!): Boolean! @auth(requires: ADMIN)
  }

  input CreateCustomerInput {
    name: String!
    contact: String
    phone: String
    email: String! @constraint(minLength: 5, format: "email")
    lineOne: String!
    lineTwo: String
    city: String!
    country: String!
    postcode: String!
  }

  input DeleteCustomerInput {
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
