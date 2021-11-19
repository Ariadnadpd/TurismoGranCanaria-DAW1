
//Cargamos dinámicamente la sección de actividades - buceo recomendados
$(document).ready(function(){
	$.getJSON("../datos.json", function(datosJSON){
        
        $.each(datosJSON.datos.actividades[0].buceo, function(clave, valor){
            $('.cajainfo').append("<section>" + "<h4 class='h4enlaces'>" + valor["titulo"] + "</h4>"
            + "<p class='penlaces'>" + valor["subtitulo"] + "</p>" + "<p>" + valor["localizacion"] + "</p>"
            + "<p>" + valor["telefono"] + " </p>" + valor["sitioweb"] + "</section>");
        });
        
	});
});


//Cargamos dinámicamente la sección de actividades - parques temáticos recomendados
$(document).ready(function(){
	$.getJSON("../datos.json", function(datosJSON){
        
        $.each(datosJSON.datos.actividades[1].parquestematicos, function(clave, valor){
            $('.cajainfopt').append("<section>" + "<h4 class='h4enlaces'>" + valor["titulo"] + "</h4>"
            + "<p class='penlaces'>" + valor["subtitulo"] + "</p>" + "<p>" + valor["localizacion"] + "</p>"
            + "<p>" + valor["telefono"] + " </p>" + valor["sitioweb"] + "</section>");
        });
        
	});
});


//Cargamos dinámicamente la sección de actividades - senderismos recomendados
$(document).ready(function(){
	$.getJSON("../datos.json", function(datosJSON){
        
        $.each(datosJSON.datos.actividades[2].senderismos, function(clave, valor){
            $('.cajainfos').append("<section>" + "<h4 class='h4enlaces'>" + valor["titulo"] + "</h4>"
            + "<p class='penlaces'>" + valor["subtitulo"] + "</p>" + "<p>" + valor["ruta"] + "</p>"
            + "</section>");
        });
        
	});
});