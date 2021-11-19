//Cargamos dinámicamente las preguntas frecuentes de la página, a través de los datos del fichero JSON.
$(document).ready(function(){
    $.getJSON("./datos.json", function(datosJSON){
        $.each(datosJSON.datos.preguntasfrec, function(clave, valor){
            //Preguntas
            clave++;
            $('#pregfrec').append("<li><a href='#p" + clave + "'>" +  valor["pregunta"] + "</a></li>");

            //Respuestas
            $('#seccion_respuestas').append("<section id='p" + clave + "'>" +
            '<h4>' + valor["pregunta"] + '</h4>' + 
            '<p>' + valor["respuesta"] + '</p>' +
            '<a href=\"#seccion_preguntas\" id=\"a_arriba\">Arriba</a>' +
            '<hr id=\"hrseccionpf\">' +
            '</section>');
        });
    });
});

