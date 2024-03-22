// Se importa el módulo express que se utiliza para construir aplicaciones web en Node.js.
const express = require("express");
//Se crea una nueva instancia de la aplicación Express mediante la invocación de la función express.
const app = express();
const port = 8080;
// conexion con el archivo config de mongoose
require("./config/config.mongoose");
// app va a utilizar esto para poder decodificar lo que viene el body con esto es capaz de leer el body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Aquí es donde importamos la función de rutas de usuarios desde nuestro archivo student.routes.js
//Luego, esta función se invoca pasando la instancia de la aplicación app como argumento.
const apiRoutes = require("./routes/student.routes");
apiRoutes(app);

app.listen(port, () =>
  console.log(`conexion con el server en el puerto ${port}`)
);
