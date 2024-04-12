const mongoose = require("mongoose");
//Crear un esquema para usuarios

const skillSchema = new mongoose.Schema({
  skill: {
    type: String,
  },
  nivel: {
    type: Number,
  },
});

const studentSchema = new mongoose.Schema({
  nombre: {
    type: String, //cada nuevo documento se formateara asi
    required: [true, "nombre obligatorio"],
    minlength: [3, "debe tener un minimo de 3 caracateres"],
  },

  correo: {
    type: String,
    required: [true, "nombre obligatorio"],
  },

  direccion: {
    type: String,
    required: [true, "tipo obligatorio"],
  },

  skills: [skillSchema],
});

//crear una función constructora para nuestro modelo y almacenarla en la variable 'Student'
const Student = mongoose.model("student", studentSchema);
//para exportar la configuracion
module.exports = Student; // Exportar la variable Student
