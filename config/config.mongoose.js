const mongosee = require("mongoose");

mongosee
  .connect("mongodb://localhost/student", {})
  .then(() => console.log("Established a connection to the database"))
  .catch((err) =>
    console.log("Something went wrong when connecting to the database", err)
  );
