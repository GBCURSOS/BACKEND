import usuario from "../MODELS/usuariosModel.js";

// Controlador para listar todos los usuarios
export async function listarUsuarios(req, res) {
  try {
    const usuarios = await usuario.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
}

// Controlador para buscar usuario por nombre y apellido
export async function buscarPorNombreApellido(req, res) {
  try {
    const { nombre, apellido } = req.query;
    console.log(`Buscando usuario: ${nombre} ${apellido}`);
    if (!nombre || !apellido) {
      return res.status(400).json({
        error: "Se debe proporcionar nombre y apellido en el query string",
      });
    }
    const usuarioEncontrado = await usuario.findOne({
      nombre: { $regex: `^${nombre}$`, $options: "i" },
      apellido: { $regex: `^${apellido}$`, $options: "i" },
    });
    /*
      regex es un operador de MongoDB que permite hacer búsquedas usando expresiones regulares (regex).
      Las expresiones regulares son patrones que se utilizan para hacer coincidir combinaciones de caracteres en cadenas de texto.
    */
    if (!usuarioEncontrado) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.status(200).json(usuarioEncontrado);
  } catch (error) {
    res.status(500).json({ error: "Error al buscar el usuario" });
  }
}

// Controlador para buscar usuario por id
export async function buscarPorId(req, res) {
  try {
    const { id } = req.params;
    console.log(`Buscando usuario por id: ${id}`);
    const usuariod = await usuario.findById(id);
    if (!usuariod) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.status(200).json(usuariod);
  } catch (error) {
    res.status(500).json({ error: "Error al buscar el usuario por id" });
  }
}

// Crear usuario
export async function crearUsuario(req, res) {
  try {
    const { nombre, apellido, edad, foto } = req.body;
    const usuariod = new usuario({ nombre, apellido, edad, foto });
    await usuariod.save();
    res.status(201).json(usuariod);
  } catch (error) {
    res.status(400).json({ error: "Error al crear usuario" });
  }
}

// Modificar ususario
export async function modificarUsuario(req, res) {
  try {
    const { id } = req.params;
    const { nombre, apellido, edad, foto } = req.body;
    const usuariod = await usuario.findByIdAndUpdate(
      id,
      { nombre, apellido, edad, foto },
      { new: true, runValidators: true }
    );
    if (!usuariod)
      return res.status(404).json({ error: "Persona no encontrada" });
    res.status(200).json(usuariod);
  } catch (error) {
    res.status(400).json({ error: "Error al modificar usuario" });
  }
}

// Eliminar usuario
export async function eliminarUsuario(req, res) {
  try {
    const { id } = req.params;
    const usuariod = await usuario.findByIdAndDelete(id);
    if (!usuariod)
      return res.status(404).json({ error: "Usuario no encontrado" });
    res.status(200).json({ mensaje: "Usuario eliminado" });
  } catch (error) {
    res.status(400).json({ error: "Error al eliminar usuario" });
  }
}
