document.getElementById("btn").addEventListener("click", async () => {
  const res = await fetch("http://localhost:3001/api/prueba");
  const data = await res.json();
  document.getElementById("respuesta").textContent = data.mensaje;
});
