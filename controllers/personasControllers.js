// Datos en memoria para pruebas CRUD
let personas = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Pérez",
    edad: 25,
    foto: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    nombre: "Ana",
    apellido: "García",
    edad: 30,
    foto: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    nombre: "Carlos",
    apellido: "Ramírez",
    edad: 28,
    foto: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    nombre: "Lucía",
    apellido: "Martínez",
    edad: 22,
    foto: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    nombre: "Miguel",
    apellido: "Torres",
    edad: 35,
    foto: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

export function listarPersonas(req, res) {
  res.json(personas);
}

export function crearPersona(req, res) {
  const nuevaPersona = req.body;
  nuevaPersona.id = Date.now();
  personas.push(nuevaPersona);
  res.status(201).json(nuevaPersona);
}

export function actualizarPersona(req, res) {
  console.log("Actualizando persona con ID:", req.params.id);
  const id = Number(req.params.id);
  const index = personas.findIndex((p) => p.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Persona no encontrada" });
  }
  // Actualiza los campos recibidos en el body
  personas[index] = { ...personas[index], ...req.body };
  res.json(personas[index]);
}

export function eliminarPersona(req, res) {
  const id = Number(req.params.id);
  const index = personas.findIndex((p) => p.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Persona no encontrada" });
  }
  const personaEliminada = personas.splice(index, 1)[0];
  res.json({ mensaje: "Persona eliminada", persona: personaEliminada });
}
