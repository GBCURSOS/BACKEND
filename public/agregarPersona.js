document
  .getElementById("formPersona")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const form = e.target;
    const persona = {
      nombre: form.nombre.value,
      apellido: form.apellido.value,
      edad: Number(form.edad.value),
      foto: form.foto.value,
    };
    const res = await fetch("http://localhost:3000/api/personas/cp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(persona),
    });
    const data = await res.json();
    document.getElementById("resultado").textContent =
      "Persona agregada: " + data.nombre + " " + data.apellido;
    form.reset();
  });
