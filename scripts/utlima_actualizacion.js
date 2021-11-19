// Función que detecta la última modificación del archivo JSON y llama a ultActualizacion
$(document).ready(function(){
    var url = "../datos.json";
    var xhr = new XMLHttpRequest();
    xhr.open("HEAD", url);

    xhr.onreadystatechange = function () {
        
        if (xhr.readyState === 4) {
            $('#actualizacion').append('<p>' + ultActualizacion(xhr.getResponseHeader("Last-Modified")) + '</p>');
        }};

    xhr.send();
});

//Función que muestra exactamente el momento de la última vez que se actualizó el sitio web.
function ultActualizacion(cfecha){

    //Array con el nombre de los meses del año
    var meses = new Array("Enero", "Febrero","Marzo","Abril", "Mayo","Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"); 

    //Establecemos un objeto tipo fecha de JS.
    var fecha = new Date(Date.parse(cfecha)); 

    //Variables con los datos de la fecha de la última modificación.
    var dia = fecha.getDate(); 
    var mes = meses[fecha.getMonth()]; 
    var ano = fecha.getFullYear(); 
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
    
    hora = ('0' + hora).slice(-2);
    minutos = ('0' + minutos).slice(-2);
    segundos = ('0' + segundos).slice(-2);
    
    //Retornamos la fecha completa.
    return "Última actualización el " + (dia +" de " + mes + " de " + ano + " a las " + hora + ":" + minutos + ":" + segundos);
    
} 
