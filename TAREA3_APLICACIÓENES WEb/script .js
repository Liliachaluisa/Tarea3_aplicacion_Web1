document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("clienteForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Obtener los valores del formulario
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;
        const direccion = document.getElementById("direccion").value;

        // Aquí puedes realizar acciones con los datos, como enviarlos a un servidor o mostrarlos en la página.
        console.log("Nombre: " + nombre);
        console.log("Email: " + email);
        console.log("Teléfono: " + telefono);
        console.log("Dirección: " + direccion);

        // Limpia el formulario después de enviar los datos
        form.reset();
    });
});



