function mover(direccion){
    location.href = direccion;
}

function iniciar(){
    const name = document.getElementById("user").value;
    const pass = document.getElementById("pass1").value;

    var log = {usuario: name, password: pass};
    //Se envía los datos IMPLEMENTAR

    //Recibe el okey, cargar página de sesión
    mover("sesion.html");
}

function guardar_reg(){
    var usuario = document.getElementById("user");
    var contra = document.getElementById("pass1");
    var name = document.getElementById("name1").value;
    var lastn = document.getElementById("lastname1").value;
    var user = document.getElementById("login").value;
    var pass = document.getElementById("pass2").value;
    var cent = document.getElementById("center").value;

    var medico = {nombre: name, apellidos: lastn, login:user, password: pass, centro: cent};
    //Se envía los datos IMPLEMENTAR

    alert("Archivos enviados correctamente");
    //Recibe el okey, cargar página de index
    mover("index.html");
}

function filtrar(){
    //IMPLEMENTAR filtros
    mover("filtros.html");
}