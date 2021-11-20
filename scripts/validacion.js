'use strict'

var count = 0;

//Función que valida el formulario de la página de contacto desde la parte del cliente, 
// antes de enviar la informacíon del mismo al servidor
function validarFormulario(evento){
    
    //Evitamos la acción por defecto del evento
    if(evento) evento.preventDefault();

    //Variables de control y de comprobación
    
    var comprueba = false;
    var control = true;

    //Variables generales del formulario
    let comentario = document.getElementById('comentario1');
    let errorTxa = document.getElementById('error_textarea'); 
    let errorSelect = document.getElementById('error_select');
    let nombreSelect = document.querySelector('select');
    let nombre = document.getElementById('nombreContacto');
    let errorNombre = document.getElementById('error_nombre');
    var regNombre = /^([a-z ñáéíóú]{4,60})$/i;
    let email = document.getElementById('emailContacto');
    let errorEmail = document.getElementById('error_email');
    var regEmail = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    // ************************** Select **************************
    if(nombreSelect.value == "") {
      errorSelect.innerHTML = "<p>!Debe seleccionar alguna opción!</p>";
      let error_color_select = document.querySelector("#select_contacto");
      if(!error_color_select.classList.contains("errorform3")){
        error_color_select.classList.toggle("errorform3");
      }
      control=false;
      count++;
      nombreSelect.focus();
    } else {
      errorSelect.innerHTML = "";
    }

    // ************************** Textarea **************************

    let error_color_textarea = document.querySelector("#comentario1");

    //TextArea con más de 250 caracteres
    if(comentario.value.trim().length > 250) {
        errorTxa.innerHTML='<p>¡El número máximo de caracteres es de 250!</p>';
        if(!error_color_textarea.classList.contains("errorform2")){
          error_color_textarea.classList.toggle("errorform2");
        }
        control=false;
        comprueba=true;
        count++;
        comentario.focus();
    } else {
        errorTxa.innerHTML='';
    }
    
    //TextArea vacío o  con menos de 2 caracteres
    if(comentario.value.trim().length < 2) {
      errorTxa.innerHTML='<p>¡El número mínimo de caracteres es de 2!</p>';
      if(!error_color_textarea.classList.contains("errorform2")){
        error_color_textarea.classList.toggle("errorform2");
      }
      control=false;
      count++;
      comentario.focus();
    } else if(!comprueba){
      errorTxa.innerHTML='';
    }

    // ************************** Nombre y apellidos **************************

    //Nombre y apellidos que no cumplen con el patrón de un nombre y apellidos
    if (!regNombre.test(nombre.value)) {
      errorNombre.innerHTML = '<p>Nombre inválido. Un nombre válido podría ser por ejemplo: Antonio García Rodríguez</p>';
      let error_color_text = document.querySelector("input[type=text]");
      if(!error_color_text.classList.contains("errorform")){
        error_color_text.classList.toggle("errorform");    
      }
      control=false;
      count++;
      nombre.focus();
    } else {
      errorNombre.innerHTML = '';
    }

    // ************************** Email **************************
    
    //Email correcto siguiendo un patrón
    if (!regEmail.test(email.value)) {
      errorEmail.innerHTML = '<p>Email inválido. Un email válido podría ser por ejemplo: jose.daw.99@gmail.com</p>';
      let error_color_email = document.querySelector("input[type=email]");
      if(!error_color_email.classList.contains("errorform1")){
        error_color_email.classList.toggle("errorform1");
      }
      control=false;
      count++;
      email.focus();
    } else {
      errorEmail.innerHTML = '';
    }
    
    // Valores devueltos por la función
    if(!control) {
      if(count == 4){
        nombreSelect.focus();
      }
      count=0;
      errorDialogo();
      return false;
    } else {
      $("#dialog").dialog("open");       
    }
    return true;
}


//Función que cuenta los caracteres restantes a escribir en el cuadro de texto del comentario del formulario.
function cuenta(){
    let tam = document.getElementById('comentario1').value.trim();
    let negrita = document.getElementById('strong');
    let restriccion = document.getElementById('em_com'); 
    let errorTxa = document.getElementById('error_textarea');

    negrita.innerHTML = 250 - tam.length;

    if(tam.length > 250 || tam.length < 0) {
      restriccion.style.display="none";
      errorTxa.innerHTML = "<p>Se ha excedido el número de caracteres permitidos, su formulario no se enviará.</p>";
    } else {
      restriccion.style.display="block"; 
      errorTxa.innerHTML="";
    }
}


//Función para el mensaje de error con el objeto dialog() de jQuery-UI
function errorDialogo(){
  var error = "Algunos campos son incorrectos. Vuelva a revisar su formulario.";
  var dialogo=$('<div></div>');
  dialogo.text(error);
  dialogo.dialog({
      title:'Error al enviar el formulario',
      width: '400px',
      modal: true,
      resizable: false,
      buttons: [{
          text: "Aceptar",
          click: function() {
            $(this).dialog("close");
          }
      }]

  });
  
}

// Función para el mensaje de éxito con el objeto dialog() de jQuery-UI
$(document).ready(function exitoDialogo(){

//  $("#dialog").text("El correo se ha enviado correctamente.");
  $("#dialog").dialog({
    autoOpen: false,
    autoClose: false,
    modal: true,
    width: '400px',
    resizable: false,
    buttons: {
      "Aceptar": function () {
        location.reload();
        $(this).dialog("close");
      }
    }
  });

  $("#enviar_form").button().click(function(){
    validarFormulario();
    return false;     
  });
});




