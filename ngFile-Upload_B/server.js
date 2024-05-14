const cors = require("cors");
const express = require("express");
const app = express();
const initRoutes = require("./src/routes/base_routes");
require('dotenv').config()

global.__basedir = __dirname;

var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));



app.use(express.urlencoded({ extended: true }));


initRoutes(app);

app.listen(process.env.PORT, () => {
  console.log(`Running @ localhost: ${process.env.PORT}`);
});
