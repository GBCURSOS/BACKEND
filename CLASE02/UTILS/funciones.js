import usuario from "../MODELS/usuariosModel.js";
import usuarios from "../MODELS/usuariosSemilla.js";

export async function iniciarDB() {
  const count = await usuario.countDocuments();
  if (count === 0) {
    await usuario.insertMany(usuarios);
    console.log("Usuarios base insertados en la base de datos");
  }
}
