import { gql } from 'apollo-server-express';

const userSchema = gql`
  extend type Query {
    users: [User!] @auth(requires: RECEPTIONIST)
    user(id: ID!): User @auth(requires: RECEPTIONIST)
    me: User @auth(requires: AUTH)
  }

  enum UserRoleInput {
    FRANCHISE
    RECEPTIONIST
    MECHANIC
    FOREPERSON
  }

  enum UserRole {
    ADMIN
    FRANCHISE
    RECEPTIONIST
    MECHANIC
    FOREPERSON
  }

  extend type Mutation {
    createUser(input: CreateUser!): User! @auth(requires: RECEPTIONIST)

    signIn(login: String!, password: String!): Token!

    deleteUser(id: ID!): Boolean! @auth(requires: FOREPERSON)
  }

  type Token {
    token: String!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    role: UserRole!
  }

  input CreateUser {
    username: String!
    email: String! @constraint(format: "email")
    role: UserRoleInput!
    password: String! @constraint(minLength: 5, maxLength: 20)
  }
`;

export default userSchema;
