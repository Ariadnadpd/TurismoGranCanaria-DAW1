
//Cargamos dinámicamente las preguntas frecuentes de la página, a través de los datos del fichero JSON.
$(document).ready(function(){
    $.getJSON("./datos.json", function(datosJSON){
        $.each(datosJSON.datos.preguntasfrec, function(clave, valor){

            //Preguntas
            clave++;
            $('#pregfrec').append("<li><a href='p" + clave + "'>" +  valor["pregunta"] + "</a></li>");

            //Respuestas
            $('#seccion_respuestas').append("<section id='#p" + clave + "'>" +
            '<h4>' + valor["pregunta"] + '</h4>' + 
            '<p>' + valor["respuesta"] + '</p>' +
            '<a href=\"#seccion_preguntas\" id=\"a_arriba\">Arriba</a>' +
            '<hr id=\"hrseccionpf\">' +
            '</section>');
        });
    });
});

//Función que muestra exactamente el momento de la última vez que se actualizó la página web.
function ultActualizacion(){

    //Última modificación
    var cfecha = document.lastModified; 

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
    
    //Retornamos la fecha completa.
    if(hora >= 0 && hora <=9) {
        return (dia +" de " + mes + " de " + ano + " a las " + "0" + hora + ":" + minutos + ":" + segundos);
    } else {
        return (dia +" de " + mes + " de " + ano + " a las " + hora + ":" + minutos + ":" + segundos);
    }
} 