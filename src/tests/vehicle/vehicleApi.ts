import axios from 'axios';

import { environmentVariables } from '../../utils/env';

const API_URL = `http://localhost:${environmentVariables.PORT}/graphql`;

export const getVehicle = async (variables: { regNo: string }) =>
  axios.post(API_URL, {
    query: `
      query ($regNo: ID!) {
        vehicle(id: $regNo) {
          regNo
          model
          yearsUsed
          customer {
            name
          }
        }
      }
    `,
    variables,
  });

export const createVehicle = async (variables) => {
  return axios.post(API_URL, {
    query: `
    mutation($input: CreateVehicle!) {
      createVehicle(input: $input) {
        model
        regNo
      }
    }
    `,
    variables,
  });
};
