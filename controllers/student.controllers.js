const Student = require("../model/student.model.js");

module.exports.findAllStudent = (req, res) => {
  Student.find()
    .then((allStudent) => res.json(allStudent))
    .catch((err) =>
      res.json({
        message: "no hemos podido encontrar los estudiantes",
        error: err,
      })
    );
};

// module.exports.createStudent = (req, res) => {
//   Student.create(req.body)
//     .then((newStudent) => res.json({ newStudent }))
//     .catch((err) =>
//       res.json({
//         message: "no hemos podido encontrar los estudiantes",
//         error: err,
//       })
//     );
// };

module.exports.createStudent = async (req, res) => {
  try {
    const newStudent = await Student.create(req.body);
    res.json(newStudent);
  } catch (error) {
    res.json({
      message: "debe llenar todos los campos",
      error: error,
    });
  }
};

module.exports.findOneStudent = (req, res) => {
  Student.findOne({ _id: req.params.id })
    .then((findOneStudent) => res.json(findOneStudent))
    .catch((err) =>
      res.json({
        message: "no hemos podido encontrar los estudiantes",
        error: err,
      })
    );
};

module.exports.updateStudent = (req, res) => {
  Student.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updateStudent) => res.json({ updateStudent }))
    .catch((err) =>
      res.json({
        message: "no hemos podido encontrar los estudiantes",
        error: err,
      })
    );
};

module.exports.deleteStudent = (req, res) => {
  Student.deleteOne({ _id: req.params.id })
    .then((deleteStudent) => res.json(deleteStudent))
    .catch((err) =>
      res.json({
        message: "no hemos podido encontrar los estudiantes",
        error: err,
      })
    );
};
