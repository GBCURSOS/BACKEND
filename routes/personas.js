import { Router } from "express";
import {
  listarPersonas,
  crearPersona,
  actualizarPersona,
  eliminarPersona,
} from "../controllers/personasControllers.js";

const router = Router();

router.get("/lp", listarPersonas);
router.post("/cp", crearPersona);
router.put("/:id", actualizarPersona);
router.delete("/:id", eliminarPersona);

export default router;
