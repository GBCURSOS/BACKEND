import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import usuario from "./MODELS/usuariosModel.js";
import conectarDB from "./UTILS/db.js";
import { iniciarDB } from "./UTILS/funciones.js";
import router from "./ROUTES/usuariosRoutes.js";


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("PUBLIC"));

const PORT = process.env.PORT;

conectarDB();
iniciarDB();

app.get("/prueba", (req, res) => {
  res.send("Backend funcionando");
});

app.use("/api/usuarios", router);

app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});


// Para hombres: https://randomuser.me/api/portraits/men/{n}.jpg
// Para mujeres: https://randomuser.me/api/portraits/women/{n}.jpg

