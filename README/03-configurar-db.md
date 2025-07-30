# Paso 3: Configurar y conectar la base de datos

1. Instala Mongoose:
   ```bash
   npm install mongoose
   ```
2. Crea la carpeta `CONFIGDB` si no existe y dentro un archivo `connectDB.js`.
3. Agrega el siguiente código a `connectDB.js`:

   ```js
   const mongoose = require("mongoose");

   const connectDB = async () => {
     try {
       await mongoose.connect("mongodb://localhost:27017/tu_basededatos", {
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

4. Importa y ejecuta `connectDB()` en tu `index.js` antes de iniciar el servidor.
