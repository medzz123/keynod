import { gql } from 'apollo-server-express';

const taskSchema = gql`
  extend type Mutation {
    addTask(input: AddTask!): Task! @auth(requires: RECEPTIONIST)
  }

  enum TaskStatus {
    SETTLED
    PENDING
  }

  input AddTask {
    jobId: ID!
    duration: Int!
    description: String!
    partsUsed: [PartUsedInput!]
  }

  type Task {
    duration: Int!
    description: String!
    parts: [PartUsed!]
  }

  input PartUsedInput {
    quantity: Int!
    partId: ID!
  }

  type PartUsed {
    quantity: Int!
    part: Part!
  }
`;

export default taskSchema;
