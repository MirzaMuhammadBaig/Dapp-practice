const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
const bodyParse = require("body-parser");
const routes = require("./Routes/add.routes");

app.use(cors());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());
app.use(
  bodyParse.json({
    extended: true,
  })
);

app.use("/admin", routes);

app.listen(port, () => {
  console.log(`API server is running on localhost:${port}`);
});

module.exports = app;
