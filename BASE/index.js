import express from 'express';
import cors from 'cors'; // Cross-Origin Resource Sharing

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/prueba", (req, res) => {
  res.json({mensaje:'Prueba de funcionamiento del Servidor BASE. ruta /api/prueba'});
});

app.get("/", (req, res) => {
  res.json({ mensaje: "Servidor BASE en funcionamiento. Ruta /" });
});

app.listen(PORT, () => {
  console.log(`Servidor BASE corriendo en http://localhost:${PORT}`);
});

