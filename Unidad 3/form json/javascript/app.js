let nombre = document.querySelector(".inputNombre");
let correo = document.querySelector(".inputCorreo");
let btnEnviar = document.querySelector(".btnEnviar");
let divdatos = document.querySelector(".datos");

btnEnviar.addEventListener("click", function () {
  let datos = {
    nombre: nombre.value,
    correo: correo.value,
  };

  let jsonDatos = JSON.stringify(datos);

  divdatos.textContent = jsonDatos;
});
