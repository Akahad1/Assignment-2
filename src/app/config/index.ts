import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join((process.cwd(), ".env")) });
console.log(process.cwd());

export default {
  port: process.env.PORT,
  database: process.env.DATABASE,
};
