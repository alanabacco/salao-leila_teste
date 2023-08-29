const express = require("express");
const process = require("process");
const routes = require("./routes");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 8080;

app.use(
  cors({
    origin: "http://localhost:3000/",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

routes(app);

app.listen(port, () => console.log(`listening on port ${port}`));

module.exports = app;
