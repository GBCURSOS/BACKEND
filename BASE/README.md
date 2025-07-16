# Creación de un Servidor Básico con Node.js y Express

## Pasos para iniciar el servidor

1. **Crear una carpeta para el proyecto**

   ```bash
   mkdir servidor_basico
   cd servidor_basico
   ```

2. **Inicializar el proyecto Node.js**

   ```bash
   npm init -y
   ```

3. **Instalar Express**

   ```bash
   npm install express
   ```

4. **Instalar y configurar CORS**

   Para permitir el acceso al servidor desde el navegador (por ejemplo, usando Live Server o desde otro origen), instalar el paquete cors:

   ```bash
   npm install cors
   ```

   Y agregar en el archivo principal antes de las rutas:

   ```js
   import cors from "cors";
   app.use(cors());
   ```

5. **(Opcional) Configurar módulos ES6**
   Agregar en el archivo `package.json`:

   ```json
   "type": "module"
   ```

6. **Crear el archivo principal**
   Ejemplo: `index.js`

7. **Código básico del servidor en `index.js`:**

   ```js
   import express from "express";
   import cors from "cors";
   const app = express();
   app.use(express.json());
   app.use(cors());
   const PORT = 3000;

   app.get("/", (req, res) => {
     res.json({ mensaje: "Servidor Node.js en funcionamiento." });
   });

   app.listen(PORT, () => {
     console.log(`Servidor escuchando en http://localhost:${PORT}`);
   });
   ```

8. **Ejecutar el servidor**

   ```bash
   node index.js
   ```

9. **(Opcional) Instalar nodemon para desarrollo**

   ```bash
   npm install --save-dev nodemon
   ```

   Agregar en `package.json`:

   ```json
   "scripts": {
     "dev": "nodemon index.js"
   }
   ```

   Luego ejecutar:

   ```bash
   npm run dev
   ```

10. **Ignorar dependencias en el control de versiones**

    Crear un archivo llamado `.gitignore` en la raíz del proyecto y agregar la siguiente línea para evitar subir la carpeta `node_modules` al repositorio:

    ```
    node_modules/
    ```

11. **Restaurar dependencias en otro entorno**

    Si se clona el proyecto en otra máquina, ejecutar:

    ```bash
    npm install
    ```

    Esto instalará automáticamente todas las dependencias listadas en `package.json`.

---

## Cómo probar el servidor creado

- Una vez iniciado el servidor, abrir un navegador web y acceder a:

  ```
  http://localhost:3000/
  ```

- Si todo está correcto, el navegador mostrará el mensaje en formato JSON: `{ "mensaje": "Servidor Node.js en funcionamiento." }`

- También se puede probar usando herramientas como curl:

  ```bash
  curl http://localhost:3000/
  ```

---

Este procedimiento permite crear y probar un servidor básico con Node.js y Express, listo para ser extendido según las necesidades del proyecto.
