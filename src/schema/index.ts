import { gql } from "apollo-server-express";

import userSchema from "./user";
import messageSchema from "./message";

const linkSchema = gql`
  directive @auth(
    requires: Role = ADMIN
    type: Type = ROLE
  ) on OBJECT | FIELD_DEFINITION

  enum Role {
    ADMIN
    USER
    GUEST
  }

  enum Type {
    ROLE
    IS_MESSAGE_OWNER
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
