const bodyParser = require("body-parser");
const clientRoute = require("./clientRoute");

module.exports = (app) => {
  app.use(bodyParser.json(), clientRoute);
};
