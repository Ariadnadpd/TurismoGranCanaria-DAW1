// Esto es de prueba, verificar que funciona, sino, eliminarlo.
$(function(){
    $('.header_dinamico').load("../carga_ficheros/header_footer.html .header1");
    $('.footer_dinamico').load("../carga_ficheros/header_footer.html .footer");
 });


// Funciones para formulario

const email = document.getElementById("mail");

email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("¡Se esperaba una dirección de correo electrónico!");
    } else {
        email.setCustomValidity("");
    }
});


