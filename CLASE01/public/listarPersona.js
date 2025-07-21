document.getElementById("btnListar").addEventListener("click", async () => {
  const res = await fetch("http://localhost:5100/api/personas/listar");
  const personas = await res.json();
  const lista = document.getElementById("listaPersonas");
  lista.innerHTML = "";
  personas.forEach((p) => {
    const li = document.createElement("li");
    console.log(p);
    li.innerHTML = `<strong>${p.nombre} ${p.apellido}</strong> - Edad: ${p.edad} <br><img src="${p.foto}" alt="foto" width="50">`;
    lista.appendChild(li);
  });
});
