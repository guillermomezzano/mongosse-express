const mongoose = require("mongoose");
//Crear un esquema para usuarios

const studentSchema = new mongoose.Schema({
  nombre: {
    type: String, //cada nuevo documento se formateara asi
    required: [true, "nombre obligatorio"],
    minlength: [3, "debe tener un minimo de 3 caracateres"],
  },

  direccion: {
    type: String,
    required: [true, "tipo obligatorio"],
  },

  correo: {
    type: String,
    required: [true, "descripcion obligatorio"],
    minlength: [3, "debe tener un minimo de 3 caracteres"],
  },
});

//crear una función constructora para nuestro modelo y almacenarla en la variable 'Student'
const Student = mongoose.model("Student", studentSchema);
//para exportar la configuracion
module.exports = Student; // Exportar la variable Student
