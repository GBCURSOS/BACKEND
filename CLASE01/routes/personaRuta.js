import { Router } from 'express';
import { listarPersonas, crearPersona, actualizarPersona, borrarPersona } from '../collections/personaControl.js';

const router = Router();

router.get('/listar', listarPersonas);
router.post('/crear', crearPersona);
router.put('/actualizar/:id', actualizarPersona);
router.delete('/borrar/:id', borrarPersona);

export default router;
