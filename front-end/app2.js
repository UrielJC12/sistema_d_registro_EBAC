console.log("EBAC web service");

var registro = []; // Inicializar el arreglo vacío
var numero_tlf = [];
function agregar_n_alumno() {
    var nombre = prompt("Ingrese el nombre del alumno:");
    var edad = prompt("Ingrese la edad del alumno:");
    var zona_recidencia = prompt("Ingrese la zona de residencia del alumno:");
    var nombre_d_programa = prompt("Ingrese el nombre del programa:");
    var email = prompt("Ingrese el correo electrónico del alumno:");

    // Añadir el nuevo registro al arreglo
    registro.push({
        nombre: nombre,
        edad: edad,
        zona_recidencia: zona_recidencia,
        nombre_d_programa: nombre_d_programa,
        email: email
    });

    alert("Alumno agregado exitosamente");
}

function consultar_registros() {
    if (registro.length === 0) {
        alert("No hay registros para mostrar.");
    } else {
        for (var i = 0; i < registro.length; i++) {
            console.log("Nombre: " + registro[i].nombre);
            console.log("Edad: " + registro[i].edad);
            console.log("Zona de residencia: " + registro[i].zona_recidencia);
            console.log("Programa: " + registro[i].nombre_d_programa);
            console.log("Correo electrónico: " + registro[i].email);
        }
        alert("Se han consultado los registros correctamente.");
    }
}

function eliminar_registro() {
    var nombre_a_eliminar = prompt("Ingrese el nombre del alumno que desea eliminar:");
    var index = registro.findIndex(alumno => alumno.nombre === nombre_a_eliminar);

    if (index !== -1) {
        registro.splice(index, 1);
        alert("Registro eliminado correctamente.");
    } else {
        alert("No se encontró ningún alumno con ese nombre.");
    }
}

function num_telefonico() {

    while (true) {
        var activo = prompt("¿Cuentas con un número celular propio (S/N)?").toUpperCase();

        if (activo === "S") {
            var num = prompt("Ingrese su número celular: ");
            console.log("Número celular ingresado: " + num);
            registro.push({
                num: num
            });
            alert("Se ha guardado tu número celular correctamente, ¡Ahora recibiras nuestras notificaciones vía sms!");
            break;
        } else if (activo === "N") {
            console.log("Tu telefono no esta activo en el sistea, no recibiras notificaciones de ENAC via sms.");
            break;
        } else {

            alert("Por favor, ingresa una opción válida (S/N).").toUpperCase();
        }
    }
}




do {
    var opcion = prompt("Seleccione una opción: \n1. Agregar registro \n2. Consultar registros de alumnos \n3. Eliminar registro \n4.Editar datos del alumno \n5. Salir");

    if (opcion === "1") {
        agregar_n_alumno();
        num_telefonico();
    } else if (opcion === "2") {
        consultar_registros();
    } else if (opcion === "3") {
        eliminar_registro();
    } else if (opcion === "4") {

    } else if (opcion === "5") {
        alert("Saliendo del sistema");

    } else {
        alert("Opción inválida, elige otra.");
    }

    var continuar = prompt("¿Deseas hacer otra operación? (S/N)").toUpperCase();

} while (continuar === "S");