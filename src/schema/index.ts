import { gql } from "apollo-server-express";

import userSchema from "./user";
import messageSchema from "./message";
import customerSchema from "./customer";

const linkSchema = gql`
  directive @auth(requires: Role = USER) on OBJECT | FIELD_DEFINITION

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

export default [linkSchema, userSchema, messageSchema, customerSchema];
