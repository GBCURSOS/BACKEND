# Paso 8: Crear las vistas públicas

1. Crea la carpeta `PUBLIC` si no existe.
2. Dentro de `PUBLIC`, crea archivos HTML y JS para las vistas (crear, listar, buscar, modificar, eliminar usuarios, etc.).
3. Asegúrate de servir la carpeta `PUBLIC` como estática en Express:
   ```js
   app.use(express.static("PUBLIC"));
   ```
4. Conecta las vistas con los endpoints de la API usando JavaScript del lado del cliente.
