var registro = []; // Inicializar el arreglo vacío

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
            registro[registro.length - 1].num = num; // Añadir el número al último registro (el alumno recién agregado)
            alert("Se ha guardado tu número celular correctamente, ¡Ahora recibirás nuestras notificaciones vía sms!");
            break;
        } else if (activo === "N") {
            console.log("Tu teléfono no está activo en el sistema, no recibirás notificaciones de ENAC vía SMS.");
            break;
        } else {
            alert("Por favor, ingresa una opción válida (S/N).");
        }
    }
}

function editar_registro() {
    var nombre_a_editar = prompt("Ingrese el nombre del alumno que desea editar:");
    var index = registro.findIndex(alumno => alumno.nombre === nombre_a_editar);

    if (index !== -1) {
        var alumno = registro[index];

        // Mostrar los datos actuales del alumno y preguntar si desea editarlos
        alumno.nombre = prompt("Ingrese el nuevo nombre del alumno (actual: " + alumno.nombre + "):", alumno.nombre);
        alumno.edad = prompt("Ingrese la nueva edad del alumno (actual: " + alumno.edad + "):", alumno.edad);
        alumno.zona_recidencia = prompt("Ingrese la nueva zona de residencia del alumno (actual: " + alumno.zona_recidencia + "):", alumno.zona_recidencia);
        alumno.nombre_d_programa = prompt("Ingrese el nuevo nombre del programa (actual: " + alumno.nombre_d_programa + "):", alumno.nombre_d_programa);
        alumno.email = prompt("Ingrese el nuevo correo electrónico del alumno (actual: " + alumno.email + "):", alumno.email);

        // Si el número de teléfono ya está registrado, permitir editarlo
        if (alumno.num) {
            alumno.num = prompt("Ingrese el nuevo número de celular (actual: " + alumno.num + "):", alumno.num);
        } else {
            alert("Este alumno no tiene un número de teléfono registrado.");
        }

        alert("Registro actualizado correctamente.");
    } else {
        alert("No se encontró ningún alumno con ese nombre.");
    }
}

// Lógica principal del programa
do {
    var opcion = prompt("Seleccione una opción: \n1. Agregar registro \n2. Consultar registros de alumnos \n3. Eliminar registro \n4. Editar datos del alumno \n5. Salir");

    if (opcion === "1") {
        agregar_n_alumno();
        num_telefonico();
    } else if (opcion === "2") {
        consultar_registros();
    } else if (opcion === "3") {
        eliminar_registro();
    } else if (opcion === "4") {
        editar_registro();
    } else if (opcion === "5") {
        alert("Saliendo del sistema");
    } else {
        alert("Opción inválida, elige otra.");
    }

    var continuar = prompt("¿Deseas hacer otra operación? (S/N)").toUpperCase();

} while (continuar === "S");
