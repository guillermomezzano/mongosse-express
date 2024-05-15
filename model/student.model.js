const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const uniqueValidator = require("mongoose-unique-validator");
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

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    validate: {
      validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
      message: "Please enter a valid email",
    }, // validar que el correo tena una estructura correcta
  },

  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [5, "Password must be 5 characters or longer"],
  },

  direccion: {
    type: String,
    required: [true, "tipo obligatorio"],
  },

  skills: [skillSchema],
});

// campo virtual q no se guarda en la base de datos se utiliza para almacenar temporalmente la confirmación de la contraseña
studentSchema
  .virtual("confirmPassword")
  .get(() => this._confirmPassword)
  .set((value) => (this._confirmPassword = value));

// un middleware (código intermedio)  que se ejecuta antes de la validación del schema (pre('validate')) Una característica común de los Middleware es la función "siguiente". Esencialmente, cuando nuestro Middleware ha terminado lo que sea que tenga que hacer, debemos llamarlo para que se ejecute el siguiente Middleware o la siguiente función (en este caso, validaciones normales).
studentSchema.pre("validate", function (next) {
  if (this.password !== this.confirmPassword) {
    this.invalidate("confirmPassword", "Password must match confirm password");
  }
  next();
});

//asegurarnos de que nuestras contraseñas no se guarden en el texto real. sino q cifrado el 10 es  es el costo de la función de hash bcrypt mas grande el numero mas seguro pero mas costoso

studentSchema.pre("save", function (next) {
  bcrypt.hash(this.password, 10).then((hash) => {
    this.password = hash;
    next();
  });
});

studentSchema.plugin(uniqueValidator);
//crear una función constructora para nuestro modelo y almacenarla en la variable 'Student'
const Student = mongoose.model("student", studentSchema);
//para exportar la configuracion
module.exports = Student; // Exportar la variable Student
