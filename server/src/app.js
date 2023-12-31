const express = require("express");
const process = require("process");
const routes = require("./routes");
const cors = require("cors");

const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 8080;

app.use(
  cors({
    origin: ["https://localhost:3000", "http://localhost:3000"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

routes(app);

app.listen(port, () => console.log(`listening on port ${port}`));

module.exports = app;
