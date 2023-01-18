const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;
const bodyParser = require("body-parser");
const router = require("./routes/user");
//////////////////////
require("./config/db");
//////////////////////
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
///////////////////////////////
app.use(router);
//////////////////////////////
app.listen(PORT, () => {
  console.log("Server is running on " + PORT);
});
