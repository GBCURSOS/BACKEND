document.getElementById("form-buscar").addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  fetch(
    `http://localhost:4100/api/usuarios/buscarNombreApellido?nombre=${encodeURIComponent(
      nombre)}&apellido=${encodeURIComponent(apellido)}`
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
