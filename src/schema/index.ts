import { gql } from "apollo-server-express";

import userSchema from "./user";
import messageSchema from "./message";

const linkSchema = gql`
  directive @objectAuth(requires: Role = ADMIN) on OBJECT
  directive @fieldAuth(requires: Role = ADMIN) on FIELD_DEFINITION

  enum Role {
    ADMIN
    USER
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

export default [linkSchema, userSchema, messageSchema];
