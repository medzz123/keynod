import { gql } from "apollo-server-express";

const messageSchema = gql`
  extend type Query {
    messages(cursor: String, limit: Int): MessageConnection!
    message(id: ID!): Message!
  }

  extend type Mutation {
    createMessage(text: String!): Message! @auth(requires: USER)
    deleteMessage(id: ID!): Boolean! @auth(requires: USER)
  }

  type MessageConnection {
    edges: [Message!]!
    pageInfo: PageInfo!
  }

  type PageInfo {
    hasNextPage: Boolean!
    endCursor: String!
  }

  type Message {
    id: ID!
    text: String!
    createdAt: Date!
    user: User!
  }
`;

export default messageSchema;
