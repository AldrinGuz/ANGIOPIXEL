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
  runPython();
}
async function runPython() {
  const pyodide = await loadPyodide();

  await pyodide.loadPackage(["numpy", "pillow"]);

  // Obtener ruta de imagen desde el textarea
  const rutaImagen = document.getElementById("ruta-imagen").value.trim();

  // Verificar si el usuario ha proporcionado una ruta
  if (!rutaImagen) {
    document.getElementById("output").textContent = "Por favor, proporciona una ruta válida.";
    return;
  }
  console.log(rutaImagen);
  const pythonCode = document.getElementById('CNN').value;
  try {
    const result = pyodide.runPython(pythonCode);
    console.log(result);
  } catch (error) {
    console.log(`Error:`+error);
  }
}