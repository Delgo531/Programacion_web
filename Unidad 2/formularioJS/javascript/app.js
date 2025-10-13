let btnRegistrarse = document.getElementById("btnRegistrarse");

btnRegistrarse.addEventListener("click", registrarse);

function registrarse() {
    let usuario = document.getElementById("usuario").value.trim();
    let nombre = document.getElementById("nombre").value.trim();
    let apellidos = document.getElementById("apellidos").value.trim();
    let fechaNacimiento = document.getElementById("nacimiento").value;
    
    let generoSeleccionado = document.querySelector('input[name="genero"]:checked');
    let terminosycondiciones = document.getElementById("aceptar").checked;
    let mensajeConfirmacion = document.getElementById("confirmacion");

    if (generoSeleccionado && terminosycondiciones && usuario !== "" && nombre !== "" && apellidos !== "" && fechaNacimiento !== "") {
        mensajeConfirmacion.innerHTML = "<h2>Registro exitoso</h2>";
    } else {
        mensajeConfirmacion.innerHTML = "<h2>Llena todos los campos</h2>";
    }
}
