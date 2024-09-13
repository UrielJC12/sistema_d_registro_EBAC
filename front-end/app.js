

/*
console.log("EBAC web service");

// Solicitar los datos del alumno
let nombre = prompt("Ingresa el nombre de usuario:");
let zonaResidencia = prompt("Ingresa la zona de residencia:");
let edad = prompt("¿Cuál es tu edad?");
let programaEstudio = prompt("Programa a estudiar:");
let correoElectronico = prompt("Ingresa un correo electrónico:");*/

console.log("EBAC web service");

var registro = [{ nombre: nombre, edad: edad, zona_recidencia: zona_recidencia, nombre_d_programa: nombre_d_programa, email: email }]



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

function consular_registros() {
    for (var i = 0; i < registro.length; i++) {
        console.log("Nombre: " + registro[i].nombre);
        console.log("Edad: " + registro[i].edad);
        console.log("Zona de recidencia: " + registro[i].zona_recidencia);
        console.log("Correo electronico: " + registro[i].email);
        alert("Se han consultado los registros correctamente")
    };
}


do {
    var opcion = prompt("Seleccione una opción: \n1. Agregar registro \n2. Consultar registro de alumnos \n3. Eliminar registro \n4. Salir ");

    if (opcion === "1") {
        agregar_n_alumno();
    } else if (opcion === "2") {
        consular_registros();
    } else if (opcion === "3") {
        alert("Eliminar registro de alumno");
    } else if (opcion === "4") {
        alert("Salir del sistema");
    } else {
        alert("Opcion invalida, elige otra");
    }

    var continuar = prompt("¿Deseas hacer otra operación?(S/N)");

} while (continuar === "S");


