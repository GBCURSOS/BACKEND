document
  .getElementById("form-buscar-id")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const id = document.getElementById("id").value;
    fetch(
      `http://localhost:4100/api/usuarios/buscarPorId/${encodeURIComponent(id)}`
    )
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((usuario) => {
        document.getElementById("resultado").innerHTML = usuario
          ? `<p><b>${usuario.nombre} ${usuario.apellido}</b> (${usuario.edad} años)</p>`
          : "<p>No encontrado</p>";
      })
      .catch(() => {
        document.getElementById("resultado").innerHTML =
          "<p>Error al buscar usuario</p>";
      });
  });
