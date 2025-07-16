document
  .getElementById("formEliminar")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const form = e.target;
    const id = form.id.value;
    const res = await fetch(`http://localhost:3001/api/personas/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      const data = await res.json();
      document.getElementById("resultado").textContent =
        data.mensaje + ": " + (data.persona?.nombre || "");
    } else {
      document.getElementById("resultado").textContent =
        "Error: No se pudo eliminar la persona";
    }
    form.reset();
  });
