# Entregable 8: Modelos de datos implementados

Archivo: `MODELS/usuariosModel.js`

```js
const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  email: String,
  edad: Number,
});

module.exports = mongoose.model("Usuario", usuarioSchema);
```
