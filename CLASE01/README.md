# Proyecto Final Fullstack - Guía de Trabajo en Equipo

## Flujo recomendado para grupos de 5 estudiantes

1. **Creación del repositorio**

   - Un integrante del grupo crea el repositorio en GitHub.
   - El repositorio debe contener todo el código del proyecto (backend y frontend).

2. **Agregar colaboradores**

   - El creador del repositorio añade a los otros 4 integrantes como colaboradores usando **Direct access** en la sección "Manage access" de GitHub.
   - Cada colaborador recibirá una invitación y debe aceptarla para tener acceso.

3. **Clonar el repositorio**

   - Cada integrante clona el repositorio en su computadora:
     ```bash
     git clone https://github.com/usuario/proyecto.git
     ```

4. **Trabajo colaborativo**

   - Cada estudiante trabaja en ramas propias para nuevas funcionalidades o correcciones.
   - Se recomienda hacer commits frecuentes y descriptivos.
   - Para subir cambios:
     ```bash
     git push
     ```
   - Para actualizar la copia local:
     ```bash
     git pull
     ```

5. **Pull Requests y revisión**

   - Cuando una rama está lista, se puede crear un Pull Request para fusionar los cambios en la rama principal (`main`).
   - Se recomienda revisar el código antes de aceptar el PR.

6. **Despliegue en Render**
   - Al finalizar el proyecto, el grupo puede desplegar el repositorio en Render.
   - Usar variables de entorno para claves y contraseñas (por ejemplo, `.env` para la URI de MongoDB).
   - Render instalará dependencias y ejecutará el servidor automáticamente.

## Buenas prácticas

- No subir archivos sensibles como `.env` o `node_modules` al repositorio (usa `.gitignore`).
- Mantener una comunicación constante en el equipo.
- Documentar el proyecto y los endpoints en el README.

---

¡Éxito en el trabajo final!
