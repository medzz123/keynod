import axios from 'axios';

import { environmentVariables } from '../../utils/env';

const API_URL = `http://localhost:${environmentVariables.PORT}/graphql`;

export const getCustomer = async (variables: { id: string }) =>
  axios.post(API_URL, {
    query: `
      query ($id: ID!) {
        customer(id: $id) {
          id
          name
          phone
          email
          address
          vehicles {
            id
            model
          }
          payments {
            id
            paymentStatus
          }
        }
      }
    `,
    variables,
  });

export const createCustomer = async (variables) => {
  return axios.post(API_URL, {
    query: `
    mutation($input: CreateCustomer!) {
      createCustomer(input: $input) {
        id
        name
        address
        email
        phone
      }
    }
    `,
    variables,
  });
};
