import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(__dirname, "data.txt");

const randomRate = (start: Date, end: Date) =>
  new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  ).getTime();

export const readAndTransform = async () => {
  const start = new Date(2012, 1, 1);
  const end = new Date();

  const file = await fs.readFile(filePath, "utf8");

  const rows = file.split("\n");

  const result = rows.map((el) => {
    const keys = el.split(",");

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
