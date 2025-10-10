let login = getElementById("btnLogin");

function login() {
  let usuario = document.getElementById("inputUsuario");
  let password = document.getElementById("inputPassword");
  let confirm = document.getElementById("loginConfirm");

  if (usuario != null && password != null) {
    confirm.innerHTML = "<p> Iniciando sesion...";
  } else if (usuario == null && password != null) {
    confirm.innerHTML = "<p> falta ingrear usuario";
  } else if (usuario != null && password == null) {
    confirm.innerHTML = "<p> falta ingrear contraseña";
  } else {
    confirm.innerHTML = "<p> falta ingrear usuario y contraseña";
  }
}


