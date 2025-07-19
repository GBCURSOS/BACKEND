// Importa el framework Express para crear el servidor
import express from "express";
// Importa CORS para permitir peticiones desde otros orígenes (navegador, live server, etc.)
import cors from "cors";
// Importa las rutas relacionadas con personas
import personasRoutes from "./routes/personas.js";

// Crea la aplicación Express
const app = express();
// Define el puerto en el que escuchará el servidor
const PORT = 3001;

// Intermediario (middleware) para que el servidor acepte y procese JSON en las peticiones
app.use(express.json());
// Habilitar CORS
app.use(cors());

// Sirve archivos estáticos desde la carpeta 'public'
app.use(express.static("public"));

// Ruta de prueba para verificar que la API responde correctamente
app.get("/api/prueba", (req, res) => {
  res.json({ mensaje: `Prueba de la API en el puerto ${PORT}` });
});

// Usa las rutas de personas bajo el prefijo /api/personas
app.use("/api/personas", personasRoutes);

// Inicia el servidor y lo pone a escuchar en el puerto definido
app.listen(PORT, () => {
  console.log(`Servidor 01 escuchando en http://localhost:${PORT}`);
});

// Ejemplo de URLs para fotos de prueba:
// Para hombres: https://randomuser.me/api/portraits/men/{n}.jpg
// Para mujeres: https://randomuser.me/api/portraits/women/{n}.jpg
// Repositorio de ejemplo: https://github.com/GBCURSOS/BACKEND.git
