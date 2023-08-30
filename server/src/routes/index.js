const bodyParser = require("body-parser");
const clientsRoute = require("./clientsRoute");
const schedulesRoute = require("./schedulesRoute");
const servicesRoute = require("./servicesRoute");
const authRoute = require("./authRoute");

module.exports = (app) => {
  app.use(bodyParser.json(), clientsRoute, schedulesRoute, servicesRoute, authRoute);
};
