import { Router } from "express";

import {
  listarUsuarios,
  buscarPorNombreApellido,
  buscarPorId,
  crearUsuario,
  modificarUsuario,
  eliminarUsuario,
} from "../CONTROLLERS/usuariosControllers.js";

const router = Router();

// Ruta para listar todas las personas
router.get("/listarUsuarios", listarUsuarios);

// Ruta para buscar usuario por nombre y apellido
router.get("/buscarNombreApellido", buscarPorNombreApellido);

// Ruta para buscar usuario por id
router.get("/buscarPorId/:id", buscarPorId);

// Ruta para crear usuario
router.post("/crearUsuario", crearUsuario);

// Modificar usuario
router.put("/modificarUsuario/:id", modificarUsuario);

// Eliminar usuario
router.delete("/eliminarUsuario/:id", eliminarUsuario);

export default router;
