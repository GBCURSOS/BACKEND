document
  .getElementById("form-eliminar")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const id = document.getElementById("id").value;
    fetch(
      `http://localhost:4100/api/usuarios/eliminarUsuario/${encodeURIComponent(id)}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((resp) => {
        document.getElementById("resultado").innerHTML = `<p>${
          resp.mensaje || "Usuario eliminado"
        }</p>`;
      })
      .catch(() => {
        document.getElementById("resultado").innerHTML =
          "<p>Error al eliminar usuario</p>";
      });
  });
