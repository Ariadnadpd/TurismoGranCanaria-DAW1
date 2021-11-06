'use strict'

// Esto es de prueba, verificar que funciona, sino, eliminarlo.
$(function(){
    $('.header_dinamico').load("../carga_ficheros/header_footer.html .header1");
    $('.footer_dinamico').load("../carga_ficheros/header_footer.html .footer");
 });


// Funciones para formulario

/*const email = document.getElementById("mail");

email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("¡Se esperaba una dirección de correo electrónico!");
    } else {
        email.setCustomValidity("");
    }
});*/

console.log("holaaaaa");

// Funciones para compartir páginas:

// Facebook
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'widgets.js'));
    
