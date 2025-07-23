// Datos en memoria para pruebas CRUD
let personas = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Pérez",
    edad: 25,
    foto: "https://randomuser.me/api/portraits/men/25.jpg",
  },
  {
    id: 2,
    nombre: "Ana",
    apellido: "García",
    edad: 30,
    foto: "https://randomuser.me/api/portraits/women/30.jpg",
  },
  {
    id: 3,
    nombre: "Carlos",
    apellido: "Ramírez",
    edad: 28,
    foto: "https://randomuser.me/api/portraits/men/28.jpg",
  },
  {
    id: 4,
    nombre: "Lucía",
    apellido: "Martínez",
    edad: 22,
    foto: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    id: 5,
    nombre: "Miguel",
    apellido: "Torres",
    edad: 35,
    foto: "https://randomuser.me/api/portraits/men/35.jpg",
  },
];

export function listarPersonas(req, res) {
  res.json(personas);
}

export function crearPersona(req, res) {
  const nuevaPersona = req.body;
  nuevaPersona.id = personas.length ? personas[personas.length - 1].id + 1 : 1;
  personas.push(nuevaPersona);
  res.status(201).json(nuevaPersona);
}

export function actualizarPersona(req, res) {
  const id = parseInt(req.params.id);
  const datosActualizados = req.body;
  console.log(`Actualizando persona con ID: ${id}`, datosActualizados);
  const index = personas.findIndex((p) => p.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Persona no encontrada" });
  }
  // Actualiza los campos recibidos en el body
  personas[index] = { ...personas[index], ...req.body };
  return res.status(200).json(personas[index]);
}

export function borrarPersona(req, res) {
  const id = parseInt(req.params.id);
  const index = personas.findIndex((p) => p.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Persona no encontrada" });
  }
  const personaEliminada = ppwdersonas.splice(index, 1)[0];
  return res.status(200).json({ mensaje: "Persona eliminada", persona: personaEliminada });
}