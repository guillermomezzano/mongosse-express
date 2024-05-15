const {
  findAllStudent,
  createStudent,
  updateStudent,
  deleteStudent,
  findOneStudent,
  login,
} = require("../controllers/student.controllers");

module.exports = (app) => {
  app.get("/students", findAllStudent);
  app.post("/student", createStudent);
  app.put("/student/:id", updateStudent);
  app.delete("/student/:id", deleteStudent);
  app.get("/student/:id", findOneStudent);
  app.post("/student/login", login);
};
