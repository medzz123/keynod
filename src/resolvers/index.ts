import { GraphQLDateTime } from "graphql-iso-date";

import userResolvers from "./user";
import messageResolvers from "./message";
import customerResolvers from "./customer";
import vehicleResolvers from "./vehicle";

const customScalarResolver = {
  Date: GraphQLDateTime,
};

export default [
  customScalarResolver,
  userResolvers,
  messageResolvers,
  customerResolvers,
  vehicleResolvers,
];
