const {
  findAllStudent,
  findOneStudent,
} = require("../controllers/student.controllers");

module.exports = (app) => {
  app.get("/student", findAllStudent);
};
