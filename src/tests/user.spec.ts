import { expect } from 'chai';

import * as userApi from './api';

describe('users', () => {
  describe('user(id: String!): User', () => {
    it('returns a user when user can be found', async () => {
      const {
        data: {
          data: {
            signIn: { token },
          },
        },
      } = await userApi.signIn({
        login: 'receptionist',
        password: 'bugendo',
      });

      const result = await userApi.user({ id: '1' }, token);

      expect(result.data.data.user.id).to.eql('1');
    });

    it('returns null when user cannot be found', async () => {
      const expectedResult = {
        data: {
          user: null,
        },
      };

      const {
        data: {
          data: {
            signIn: { token },
          },
        },
      } = await userApi.signIn({
        login: 'receptionist',
        password: 'bugendo',
      });

      const result = await userApi.user({ id: '1234' }, token);

      expect(result.data).to.eql(expectedResult);
    });
  });

  describe('deleteUser(id: String!): Boolean!', () => {
    it('returns an error because only admins can delete a user', async () => {
      const {
        data: {
          data: {
            signIn: { token },
          },
        },
      } = await userApi.signIn({
        login: 'mechanic',
        password: 'bugendo',
      });

      const {
        data: { errors },
      } = await userApi.deleteUser({ id: '1' }, token);

      expect(errors[0].message).to.eql("You don't have enough permissions!");
    });
  });
});
