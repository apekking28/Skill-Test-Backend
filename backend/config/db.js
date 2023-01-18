const db = require("mongoose");

db.set("strictQuery", true);
db.connect("mongodb://localhost:27017/Project_db");
db.connection.on("connected", () => {
  console.log("succsessfully connected to mongodb");
});
db.connection.on("error", () => {
  console.log("not connected to mongodb");
});

module.exports = db;
