import { gql } from 'apollo-server-express';
import { constraintDirectiveTypeDefs } from 'graphql-constraint-directive';

import customerSchema from './customer';
import messageSchema from './message';
import userSchema from './user';
import vehicleSchema from './vehicle';

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
