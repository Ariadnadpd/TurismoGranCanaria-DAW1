const buscador = document.getElementById('cuadrobusqueda');
const comentario = document.getElementById('comentario1');

buscador.addEventListener("input", function (evento) {
    if(evento) evento.preventDefault();
    if (buscador.validity.tooLong) {
      buscador.setCustomValidity("¡Como máximo se deben introducir 40 caracteres!");
    } else {
      buscador.setCustomValidity("");
    }
});



function validarFormulario(evento){
    let comentario = document.getElementById('comentario1');
    let error = document.getElementById('error');

    if(evento) {
      evento.preventDefault();
    }

    // Select
    

    // Textarea
    console.log(comentario.value.length);
    if(comentario.value.length > 248) {
        alert("entro en el if");
        error.innerHTML='<p>¡El número máximo de caracteres es 250!</p>';
    } else {
      error.innerHTML='';
    }

   
}

function cuenta(){
    let tam = document.getElementById("comentario1").value;
    let negrita = document.getElementById('strong');
    negrita.innerHTML = 250 - tam.length;

}


//correcto.innerHTML = '<p> Se ha enviado correctamente</p>';
//let correcto = document.getElementById('correcto');