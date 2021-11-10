const buscador = document.getElementById('cuadrobusqueda');
const comentario = document.getElementById('comentario');

buscador.addEventListener("input", function (evento) {
    if(evento) evento.preventDefault();
    if (buscador.validity.tooLong) {
      buscador.setCustomValidity("¡Como máximo se deben introducir 40 caracteres!");
    } else {
      buscador.setCustomValidity("");
    }
});


function validarFormulario(evento){
    let comentario = document.getElementById('comentario');
    console.log(comentario.value.length);
    if(comentario.value.length > 248) {
        comentario.innerHTML='<p>¡El número máximo de caracteres es 250!</p>';
    }
}

function cuenta(){
    let tam = document.getElementById("comentario").value;
    let negrita = document.getElementById('strong');
    negrita.innerHTML = 250 - tam.length;

}