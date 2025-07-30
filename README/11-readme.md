# Principales funciones de la API de Mongoose

A continuación se describen las funciones más utilizadas de la API de Mongoose para la gestión de datos en aplicaciones Node.js:

## 1. `mongoose.connect()`

Permite conectar la aplicación a una base de datos MongoDB.

## 2. `Schema` y `model`

- `mongoose.Schema`: Define la estructura de los documentos en una colección.
- `mongoose.model`: Crea un modelo basado en un esquema para interactuar con la colección.

## 3. Métodos CRUD principales

- `Model.create(data)`: Inserta uno o varios documentos en la colección.
- `Model.find(query)`: Busca documentos que coincidan con el filtro.
- `Model.findById(id)`: Busca un documento por su ID.
- `Model.findOne(query)`: Busca el primer documento que coincida con el filtro.
- `Model.updateOne(filter, update)`: Actualiza el primer documento que coincida con el filtro.
- `Model.updateMany(filter, update)`: Actualiza todos los documentos que coincidan con el filtro.
- `Model.findByIdAndUpdate(id, update)`: Actualiza un documento por su ID.
- `Model.deleteOne(filter)`: Elimina el primer documento que coincida con el filtro.
- `Model.deleteMany(filter)`: Elimina todos los documentos que coincidan con el filtro.
- `Model.findByIdAndDelete(id)`: Elimina un documento por su ID.

## 4. Otros métodos útiles

- `Model.countDocuments(query)`: Cuenta la cantidad de documentos que cumplen una condición.
- `Model.exists(query)`: Verifica si existe al menos un documento que cumpla la condición.
- `Model.aggregate(pipeline)`: Realiza operaciones de agregación avanzadas.

Estas funciones permiten realizar la mayoría de las operaciones necesarias para la gestión de datos en MongoDB usando Mongoose.
