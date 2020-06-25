import { promises as fs } from 'fs';
import path from 'path';

const usersPath = path.join(__dirname, 'users.txt');
const customerPath = path.join(__dirname, 'customers.txt');

const randomRate = (start: Date, end: Date) =>
  new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  ).getTime();

const checkNull = (input: string) => (input === 'null' ? null : input);

export const getUsers = async () => {
  const start = new Date(2012, 1, 1);
  const end = new Date();

  const file = await fs.readFile(usersPath, 'utf8');

  const rows = file.split('\n');

  const result = rows.map((el) => {
    const keys = el.split(',');

    const messages = keys.slice(4, keys.length).map((m) => ({
      text: m,
      createdAt: randomRate(start, end),
    }));

    return {
      username: keys[0],
      email: keys[1],
      password: keys[2],
      role: keys[3],
      messages,
    };
  });

  return result;
};

export const getCustomers = async () => {
  const file = await fs.readFile(customerPath, 'utf8');

  const rows = file.split('\n');

  const result = rows.map((el) => {
    const keys = el.split(',');

    return {
      name: keys[0],
      contact: checkNull(keys[1]),
      phone: checkNull(keys[2]),
      email: keys[3],
      lineOne: keys[4],
      lineTwo: checkNull(keys[5]),
      city: keys[6],
      country: keys[7],
      postcode: keys[8],
    };
  });

  return result;
};
