const swaggerUi = require("swagger-ui-express");
const apiDoc = require("../api/components/api-doc.json");
const db = require("../api/components/db/network");
const routes = (server) => {
  server.use("/", db);
  server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(apiDoc));
};

module.exports = routes;
