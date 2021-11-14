'use strict'

// Validación del buscador del header.
function buscador(){
  var buscador = document.getElementById('cuadrobusqueda');
  if (buscador.validity.tooLong) {
    buscador.setCustomValidity("¡Como máximo se deben introducir 40 caracteres!");
  } else {
    buscador.setCustomValidity("");
  }
}

//Función que valida el formulario de la página de contacto desde la parte del cliente, antes de enviar la informacíon del mismo al servidor
function validarFormulario(evento){
    
    //Evitamos la acción por defecto del evento
    if(evento) evento.preventDefault();

    //Variables de control y de comprobación
    var control = true;
    var comprueba = false;
    
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
    if(nombreSelect.value == 0) {
      errorSelect.innerHTML = "<p>!Debe seleccionar alguna opción!</p>";
      control=false;
      nombreSelect.focus();
    } else {
      errorSelect.innerHTML = "";
    }

    // ************************** Textarea **************************

    //TextArea con más de 250 caracteres
    if(comentario.value.trim().length > 250) {
        errorTxa.innerHTML='<p>¡El número máximo de caracteres es de 250!</p>';
        control=false;
        comprueba=true;
        comentario.focus();
    } else {
        errorTxa.innerHTML='';
    }
    
    //TextArea vacío o  con menos de 2 caracteres
    if(comentario.value.trim().length < 2) {
      errorTxa.innerHTML='<p>¡El número mínimo de caracteres es de 2!</p>';
      control=false;
      comentario.focus();
    } else if(!comprueba){
      errorTxa.innerHTML='';
    }

    // ************************** Nombre y apellidos **************************

    //Nombre y apellidos que no cumplen con el patrón de un nombre y apellidos
    if (!regNombre.test(nombre.value)) {
      errorNombre.innerHTML = '<p>Nombre inválido. Un nombre válido podría ser por ejemplo: Antonio García Rodríguez</p>';
      control=false;
      nombre.focus();
    } else {
      errorNombre.innerHTML = '';
    }

    // ************************** Email **************************
    
    //Email correcto siguiendo un patrón
    if (!regEmail.test(email.value)) {
      errorEmail.innerHTML = '<p>Email inválido. Un email válido podría ser por ejemplo: jose.daw.99@emalsa.es</p>';
      control=false;
      email.focus();
    } else {
      errorEmail.innerHTML = '';
    }
    
    // Valores devueltos por la función
    if(!control) {
      errorDialogo();
      return false;
    } else {
      return true;
    }
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

//Mensaje de error con el objeto dialog() de jQuery-UI
function errorDialogo(){
  var error = "Algunos campos son incorrectos. Vuelva a revisar su formulario.";
  var dialogo=$('<div></div>');
  dialogo.text(error);
  dialogo.dialog({
      title:'Error al enviar el formulario',
      width:350,
      modal: true,
      buttons: [{
          text: "Aceptar",
          click: function() {
             $(this).dialog("close");
          }
      }]
  });
}

//correcto.innerHTML = '<p> Se ha enviado correctamente</p>';
//let correcto = document.getElementById('correcto');