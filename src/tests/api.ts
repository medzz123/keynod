import axios from 'axios';

import { environmentVariables } from '../utils/env';

const API_URL = `http://localhost:${environmentVariables.PORT}/graphql`;

export const user = async (variables, token) =>
  axios.post(
    API_URL,
    {
      query: `
      query ($id: ID!) {
        user(id: $id) {
          id
          username
          email
          role
        }
      }
    `,
      variables,
    },
    {
      headers: {
        'x-token': token,
      },
    }
  );

export const signIn = async (variables) =>
  await axios.post(API_URL, {
    query: `
      mutation ($login: String!, $password: String!) {
        signIn(login: $login, password: $password) {
          token
        }
      }
    `,
    variables,
  });

export const deleteUser = async (variables, token) =>
  axios.post(
    API_URL,
    {
      query: `
        mutation ($id: ID!) {
          deleteUser(id: $id)
        }
      `,
      variables,
    },
    {
      headers: {
        'x-token': token,
      },
    }
  );
