const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");
const routes = require("../network/router");
const { logError, clientErrorHandler, error } = require("../network/error");
const config = require("../config");
//const mongo = require("../store/mongoDB");

//middlewares
app.use(helmet());
//app.use(cors());
//routes
app.get("/test", function (req, res) {
  res.render("products", { test: "ok" });
});

//logs
app.use(morgan("dev"));

//body and query
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// morganBody(app);

routes(app);
//app.use(logError);
app.use(error);

//excepciones sin manejar
process.on("unhandledRejection", (e) => {
  // Won't execute
  // throw e;
  console.log("unhandledRejection", error);
});

app.listen(config.api.server.port, () => {
  console.log(`server listen http://localhost:${config.api.server.port}`);
});

