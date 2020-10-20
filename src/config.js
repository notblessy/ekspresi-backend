require("dotenv").config();

const env = process.env;

export default {
  ENV: env.NODE_ENV,
  PORT: +env.PORT,

  MYSQL_CONNECTION: env.MYSQL_CONNECTION,
};
