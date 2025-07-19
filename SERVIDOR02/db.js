import mongoose from "mongoose";

const uri =
  "mongodb+srv://rnogales:Universo65@cluster0.klrhknl.mongodb.net/personas?retryWrites=true&w=majority&appName=Cluster0";

export const conectarDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Conexión exitosa a MongoDB Atlas");
  } catch (err) {
    console.error("Error de conexión a MongoDB Atlas:", err);
  }
};

export default conectarDB;
