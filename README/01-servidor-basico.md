# Paso 1: Crear el servidor básico

1. Inicializa un proyecto Node.js si no lo has hecho:
   ```bash
   npm init -y
   ```
2. Instala Express:
   ```bash
   npm install express
   ```
3. Crea un archivo `index.js` con el siguiente contenido básico:

   ```js
   const express = require("express");
   const app = express();
   const PORT = 3000;

   app.get("/", (req, res) => {
     res.send("Servidor funcionando");
   });

   app.listen(PORT, () => {
     console.log(`Servidor escuchando en puerto ${PORT}`);
   });
   ```

4. Guarda los cambios.
