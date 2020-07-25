import { gql } from 'apollo-server-express';

const jobSchema = gql`
  extend type Query {
    jobs: [Job!] @auth(requires: RECEPTIONIST)
    job(id: ID!): Job @auth(requires: MECHANIC)
  }

  extend type Mutation {
    createJob(input: CreateJob!): Job! @auth(requires: RECEPTIONIST)

    assignMechanic(input: AssignMechanic!): Job!

    startJob: Job!

    endJob: Job!
  }

  enum JobStatus {
    COMPLETE
    ONGOING
    PENDING
  }

  enum JobType {
    REPAIR
    MOT
  }

  input AssignMechanic {
    jobId: ID!
    userId: ID!
  }

  input CreateJob {
    jobStatus: JobStatus!
    jobType: JobType!
    estimatedTime: Int!
    vehicleId: ID!
  }

  type Job {
    id: ID!
    dateBooked: String!
    startDate: String
    endDate: String
    jobStatus: JobStatus!
    jobType: JobType!
    estimatedTime: Int!
    timeTaken: Int
    vehicle: Vehicle!
    mechanic: [User!]
    tasks: [Task!]
    payment: Payment!
  }
`;

export default jobSchema;
