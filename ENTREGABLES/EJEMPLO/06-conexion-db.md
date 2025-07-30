# Entregable 6: Script y evidencia de conexión a la base de datos

Archivo: `CONFIGDB/connectDB.js`

```js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/usuariosdb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado a la base de datos");
  } catch (error) {
    console.error("Error al conectar a la base de datos", error);
  }
};

module.exports = connectDB;
```

Evidencia: Mensaje en consola "Conectado a la base de datos".
