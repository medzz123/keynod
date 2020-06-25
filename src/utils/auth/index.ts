import { ForbiddenError } from 'apollo-server';

import { Role } from '../../typings/generated';

export const isAuthenticated = (args, context) => {
  const { me } = context;

  if (!me) {
    throw new ForbiddenError('Not authenticated!');
  }
};

export const isRole = (args, context, requiredRole) => {
  isAuthenticated(args, context);

  if (requiredRole === 'AUTH') {
    return;
  }

  const {
    me: { role },
  } = context;

  if (role === Role.Franchise && requiredRole !== Role.Admin) {
    return;
  }

  if (
    role === Role.Foreperson &&
    ![Role.Admin, Role.Franchise].includes(requiredRole)
  ) {
    return;
  }

  if (role === requiredRole) {
    return;
  }

  throw new ForbiddenError(`You don't have enough permissions!`);
};
