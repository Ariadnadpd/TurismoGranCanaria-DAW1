'use strict'

// Carga de ficheros dinámicamente
$(document).ready(function(){
    $('.header_dinamico').load("../carga_ficheros/header_footer.html .header1");
    $('.footer_dinamico').load("../carga_ficheros/header_footer.html .footer");
 });

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
    

//Slider manual
const slider = document.querySelector("#slider");
let seccionSlider = document.querySelectorAll(".seccion-slider");
let ultimoSlider = seccionSlider[seccionSlider.length -1];

const botonIzq = document.querySelector("#boton-izquierdo");
const botonDer = document.querySelector("#boton-derecho");

slider.insertAdjacentElement('afterbegin', ultimoSlider);

function Siguiente() {
    let primerSlider = document.querySelectorAll(".seccion-slider")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.4s";
    setTimeout(function (){
        slider.style.transition="none";
        slider.insertAdjacentElement('beforeend', primerSlider);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function Anterior() {
    let seccionSlider = document.querySelectorAll(".seccion-slider");
    let ultimoSlider = seccionSlider[seccionSlider.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.4s";
    setTimeout(function (){
        slider.style.transition="none";
        slider.insertAdjacentElement('afterbegin', ultimoSlider);
        slider.style.marginLeft = "-100%";
    }, 500);
}

botonDer.addEventListener('click', function(){
    Siguiente();
    pararAuto(); //Paramos el intervalo automático
    auto = setInterval(Siguiente, 5000); ///Volvemos a iniciar el intervalo automático
});

botonIzq.addEventListener('click', function(){
    Anterior();
    pararAuto(); //Paramos el intervalo automático
    auto = setInterval(Siguiente, 5000); ///Volvemos a iniciar el intervalo automático
});

// Slider automático
var auto = setInterval(Siguiente, 5000);

//Parar ejecución automático cuando se hace click en siguiente
function pararAuto() {
    clearInterval(auto);
}

// Funciones para formulario

//Botón Leer más
function leermas1() {
    $('#boton1').hide();
    $('.leermas1').css({"display":"block"});
    $('#botonM1').css({"display":"block"});
}

function leermas2() {
    $('#boton2').hide();
    $('.leermas2').css({"display":"block"});
    $('#botonM2').css({"display":"block"});
}

function leermas3() {
    $('#boton3').hide();
    $('.leermas3').css({"display":"block"});
    $('#botonM3').css({"display":"block"});
}

//Boton leermenos()
function leermenos1() {
    $('#botonM1').hide();
    $('.leermas1').css({"display":"none"});
    $('#boton1').show();
}

function leermenos2() {
    $('#botonM2').hide();
    $('.leermas2').css({"display":"none"});
    $('#boton2').show();
}

function leermenos3() {
    $('#botonM3').hide();
    $('.leermas3').css({"display":"none"});
    $('#boton3').show();
}
