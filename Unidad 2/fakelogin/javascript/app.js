let btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", function () {
  let usuario = document.getElementById("inputUsuario").value;
  let password = document.getElementById("inputPassword").value;
  let confirm = document.getElementById("loginConfirm");

  if (usuario !== "" && password !== "") {
    confirm.innerHTML = "<p>Iniciando sesión...</p>";
  } else if (usuario === "" && password !== "") {
    confirm.innerHTML = "<p>Falta ingresar usuario</p>";
  } else if (usuario !== "" && password === "") {
    confirm.innerHTML = "<p>Falta ingresar contraseña</p>";
  } else {
    confirm.innerHTML = "<p>Falta ingresar usuario y contraseña</p>";
  }
});
