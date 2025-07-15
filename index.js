import express from "express";
import cors from "cors";
import personasRoutes from "./routes/personas.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use(express.static("public"));


app.get("/api/prueba", (req, res) => {
  res.json({ mensaje: "Prueba de la API en el puerto 3000" });
});

app.use("/api/personas", personasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

// Para hombres: https://randomuser.me/api/portraits/men/{n}.jpg
// Para mujeres: https://randomuser.me/api/portraits/women/{n}.jpg