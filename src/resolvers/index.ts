import { GraphQLDateTime } from "graphql-iso-date";

import userResolvers from "./user";
import messageResolvers from "./message";
import customerResolvers from "./customer";

const customScalarResolver = {
  Date: GraphQLDateTime,
};

export default [
  customScalarResolver,
  userResolvers,
  messageResolvers,
  customerResolvers,
];
