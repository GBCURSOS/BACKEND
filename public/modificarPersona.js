document
  .getElementById("formModificar")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const form = e.target;
    const id = form.id.value;
    const persona = {};
    if (form.nombre.value) persona.nombre = form.nombre.value;
    if (form.apellido.value) persona.apellido = form.apellido.value;
    if (form.edad.value) persona.edad = Number(form.edad.value);
    if (form.foto.value) persona.foto = form.foto.value;

    const res = await fetch(`http://localhost:3000/api/personas/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(persona),
    });
    if (res.ok) {
      const data = await res.json();
      document.getElementById("resultado").textContent =
        "Persona modificada: " + data.nombre + " " + data.apellido;
    } else {
      document.getElementById("resultado").textContent =
        "Error: No se pudo modificar la persona";
    }
    form.reset();
  });
