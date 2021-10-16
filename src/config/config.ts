import {config as loadEnvironmentVariables} from "dotenv"

loadEnvironmentVariables()

const {
  DB_NAME,
  DB_HOST,
  DB_PASSWORD,
  DB_USERNAME,
  FRONTEND_APP_URL,
  JWT_SECRET,
  NODE_ENV,
  PORT,
} = process.env

export const config = {
  isLocalEnv: NODE_ENV === "local",
  port: PORT,
  frontendUrl: FRONTEND_APP_URL,
  jwtSecret: JWT_SECRET,

  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  host: DB_HOST,
  dialect: "postgres",
}
