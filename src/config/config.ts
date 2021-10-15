import {config as loadEnvironmentVariables} from "dotenv"

loadEnvironmentVariables()

const {
  DB_NAME,
  DB_HOST,
  DB_PASSWORD,
  DB_USERNAME,
} = process.env

export const config = {
  dev: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: "postgres",
  },
}
