const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
module.exports = {
  dev: process.env.NODE_ENV !== "production",
  api: {
    server: {
      port: process.env.NODE_PORT,
    },
  },
  mysql: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB,
  },
  sentry: {
    dns: process.env.SENTRY_DNS,
    id: process.env.SENTRY_ID,
  },
};
