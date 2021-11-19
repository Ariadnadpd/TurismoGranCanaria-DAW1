
//Cargamos dinámicamente la sección de actividades - buceo recomendados
$(document).ready(function(){
	$.getJSON("../datos.json", function(datosJSON){
        
        $.each(datosJSON.datos.actividades[0].buceo, function(){
            $('.cajainfo').append("<section>" + "<h4 class='h4enlaces'>" + this["titulo"] + "</h4>"
            + "<p class='penlaces'>" + this["subtitulo"] + "</p>" + "<p>" + this["localizacion"] + "</p>"
            + "<p>" + this["telefono"] + " </p>" + this["sitioweb"] + "</section>");
        });
        
	});
});


//Cargamos dinámicamente la sección de actividades - parques temáticos recomendados
$(document).ready(function(){
	$.getJSON("../datos.json", function(datosJSON){
        
        $.each(datosJSON.datos.actividades[1].parquestematicos, function(){
            $('.cajainfopt').append("<section>" + "<h4 class='h4enlaces'>" + this["titulo"] + "</h4>"
            + "<p class='penlaces'>" + this["subtitulo"] + "</p>" + "<p>" + this["localizacion"] + "</p>"
            + "<p>" + this["telefono"] + " </p>" + this["sitioweb"] + "</section>");
        });
        
	});
});


//Cargamos dinámicamente la sección de actividades - senderismos recomendados
$(document).ready(function(){
	$.getJSON("../datos.json", function(datosJSON){
        
        $.each(datosJSON.datos.actividades[2].senderismos, function(clave, valor){
            $('.cajainfos').append("<section>" + "<h4 class='h4enlaces'>" + this["titulo"] + "</h4>"
            + "<p class='penlaces'>" + this["subtitulo"] + "</p>" + "<p>" + this["ruta"] + "</p>"
            + "</section>");
        });
        
	});
});