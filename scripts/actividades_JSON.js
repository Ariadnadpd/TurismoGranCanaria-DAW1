
//Cargamos dinámicamente la sección de actividades/restaurantes/lugares recomendados
$(document).ready(function(){
	$.getJSON("../datos.json", function(datosJSON){
        
        $.each(datosJSON.datos.actividades[0].buceo, function(clave, valor){
            $('.cajainfo').append("<section id='sec" + clave + "'>" + "<h4 class='h4enlaces'>" + valor["titulo"] + "</h4>"
            + "<p class='penlaces'>" + valor["subtitulo"] + "</p>" + "<p>" + valor["localizacion"] + "</p>"
            + "<p>" + valor["telefono"] + " </p>" + valor["sitioweb"] + "</section>");
        });
        
	});
});


//Cargamos dinámicamente la sección de actividades/restaurantes/lugares recomendados
$(document).ready(function(){
	$.getJSON("../datos.json", function(datosJSON){
        
        $.each(datosJSON.datos.actividades[1].parquestematicos, function(clave, valor){
            $('.cajainfopt').append("<section id='sec" + clave + "'>" + "<h4 class='h4enlaces'>" + valor["titulo"] + "</h4>"
            + "<p class='penlaces'>" + valor["subtitulo"] + "</p>" + "<p>" + valor["localizacion"] + "</p>"
            + "<p>" + valor["telefono"] + " </p>" + valor["sitioweb"] + "</section>");
        });
        
	});
});