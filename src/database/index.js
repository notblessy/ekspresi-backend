import knex from "knex";
const Objection = require("objection");
import config from "../config";

export const conn = knex({
  client: "mysql",
  connection: config.MYSQL_CONNECTION,
});

export class BaseModel extends Objection.Model {}
BaseModel.knex(conn);
