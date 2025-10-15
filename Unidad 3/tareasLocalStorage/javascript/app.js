const btnTarea = document.querySelector(".btntarea");
const inputTarea = document.querySelector(".tarea");
const listaTareas = document.querySelector(".listaTareas");

for (let i = 0; i < localStorage.length; i++) {
  let clave = localStorage.key(i);
  if (clave.indexOf("tarea_") === 0) {
    let texto = localStorage.getItem(clave);
    mostrarTarea(texto);
  }
}

btnTarea.addEventListener("click", function () {
  let texto = inputTarea.value;
  if (texto !== "") {
    let indice = localStorage.length;
    localStorage.setItem("tarea_" + indice, texto);
    mostrarTarea(texto);
    inputTarea.value = "";
  }
});

function mostrarTarea(texto) {
  let contenedor = document.createElement("div");
  let check = document.createElement("input");
  let etiqueta = document.createElement("span");

  check.type = "checkbox";
  etiqueta.textContent = texto;

  contenedor.appendChild(check);
  contenedor.appendChild(etiqueta);
  listaTareas.appendChild(contenedor);
}
