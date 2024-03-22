const Student = require("../model/student.model.js");

module.exports.findAllStudent = (req, res) => {
  Student.find()
    .then((allStudent) => res.json({ allStudent }))
    .catch((err) =>
      res.json({
        message: "no hemos podido encontrar los estudiantes",
        error: err,
      })
    );
};

module.exports.findOneStudent = (req, res) => {
  Student.find()
    .then((allStudent) => res.json({ allStudent }))
    .catch((err) =>
      res.json({
        message: "no hemos podido encontrar los estudiantes",
        error: err,
      })
    );
};
