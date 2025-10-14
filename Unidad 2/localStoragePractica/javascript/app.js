const btnGuardar = document.querySelector(".btnGuardar");
const nombre = document.querySelector(".nombre");
const apellidos = document.querySelector(".apellidos");
const fecha = document.querySelector(".fecha");

const nombreGuardado = localStorage.getItem("nombreText");
const apellidosGuardado = localStorage.getItem("apellidosText");
const fechaGuardada = localStorage.getItem("fechaText");

if (nombreGuardado || apellidosGuardado || fechaGuardada) {
  if (nombreGuardado) nombre.value = nombreGuardado;
  if (apellidosGuardado) apellidos.value = apellidosGuardado;
  if (fechaGuardada) fecha.value = fechaGuardada;
}

btnGuardar.addEventListener("click", () => {
  const nombreText = nombre.value.trim();
  const apellidosText = apellidos.value.trim();
  const fechaText = fecha.value;

  if (nombreText != "" && apellidosText != "" && fechaText != "") {
    localStorage.setItem("nombreText", nombreText);
    localStorage.setItem("apellidosText", apellidosText);
    localStorage.setItem("fechaText", fechaText);
  }
});
