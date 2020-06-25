import { gql } from 'apollo-server-express';
import { constraintDirectiveTypeDefs } from 'graphql-constraint-directive';

import customerSchema from './customer';
import partSchema from './part';
import userSchema from './user';
import vehicleSchema from './vehicle';

const linkSchema = gql`
  directive @auth(requires: Role = RECEPTIONIST) on OBJECT | FIELD_DEFINITION

  enum Role {
    ADMIN
    FRANCHISE
    RECEPTIONIST
    MECHANIC
    FOREPERSON
    AUTH
  }

  type PageInfo {
    hasNextPage: Boolean!
    endCursor: String!
  }

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
  customerSchema,
  vehicleSchema,
  partSchema,
  constraintDirectiveTypeDefs,
];
