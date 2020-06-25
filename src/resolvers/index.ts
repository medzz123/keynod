import { GraphQLDateTime } from 'graphql-iso-date';

import customerResolvers from './customer';
import messageResolvers from './message';
import userResolvers from './user';
import vehicleResolvers from './vehicle';

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
