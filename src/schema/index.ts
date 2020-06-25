import { gql } from "apollo-server-express";
import { constraintDirectiveTypeDefs } from "graphql-constraint-directive";

import userSchema from "./user";
import messageSchema from "./message";
import customerSchema from "./customer";
import vehicleSchema from "./vehicle";

const linkSchema = gql`
  directive @auth(requires: Role = USER) on OBJECT | FIELD_DEFINITION

  enum Role {
    ADMIN
    USER
  }

  type PageInfo {
    hasNextPage: Boolean!
    endCursor: String!
  }

  scalar Date

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [
  linkSchema,
  userSchema,
  messageSchema,
  customerSchema,
  vehicleSchema,
  constraintDirectiveTypeDefs,
];
