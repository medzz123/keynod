import { gql } from 'apollo-server-express';

const paymentSchema = gql`
  extend type Query {
    payments(cursor: String, limit: Int): PaymentConnection!
      @auth(requires: RECEPTIONIST)
    payment(id: ID!): Payment @auth(requires: MECHANIC)
  }

  extend type Mutation {
    createPayment(jobId: ID!): Payment! @auth(requires: RECEPTIONIST)

    deletePayment(id: ID!): Boolean! @auth(requires: RECEPTIONIST)

    settlePayment: Payment!
  }

  enum PaymentStatus {
    SETTLED
    PENDING
  }

  type Payment {
    id: ID!
    amount: String!
    dateSettled: String
    job: Job!
    customer: Customer!
  }

  type PaymentConnection {
    edges: [Payment!]!
    pageInfo: PageInfo!
  }
`;

export default paymentSchema;
