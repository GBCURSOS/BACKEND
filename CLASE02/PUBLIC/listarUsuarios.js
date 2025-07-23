fetch("http://localhost:4100/api/usuarios/listarUsuarios")
  .then((res) => res.json())
  .then((usuarios) => {
    const ul = document.getElementById("lista");
    usuarios.forEach((u) => {
      const li = document.createElement("li");
      li.innerHTML = `<img src="${u.foto}" alt="${u.nombre}" style="width:40px;height:40px;border-radius:50%;vertical-align:middle;margin-right:10px;"> ${u.nombre} ${u.apellido} (${u.edad} años)`;
      ul.appendChild(li);
    });
  })
  .catch((err) => {
    document.body.innerHTML += "<p>Error al obtener usuarios</p>";
  });
