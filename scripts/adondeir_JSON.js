
//Cargamos dinámicamente la sección de adondeir - museos recomendados
$(document).ready(function(){
	$.getJSON("../datos.json", function(datosJSON){
        
        $.each(datosJSON.datos.adondeir[0].museos, function(clave, valor){
            $('#cajainfojson1').append("<section>" + "<h4 class='h4enlaces'>" + valor["titulo"] + "</h4>"
            + "<p class='penlaces'>" + valor["subtitulo"] + "</p>" + "<p>" + valor["localizacion"] + "</p>"
            + "<p>" + valor["telefono"] + " </p>" + valor["sitioweb"] + "</section>");
        });
        
	});
});


//Cargamos dinámicamente la sección de adondeir - parques temáticos recomendados
$(document).ready(function(){
	$.getJSON("../datos.json", function(datosJSON){
        
        $.each(datosJSON.datos.adondeir[1].parquesnaturales, function(clave, valor){
            $('#cajainfojson2').append("<section>" + "<h4 class='h4enlaces'>" + valor["titulo"] + "</h4>"
            + "<p class='penlaces'>" + valor["subtitulo"] + "</p>" + "<p>" + valor["ruta"] + "</p>"
            + "</section>");
        });
        
	});
});


//Cargamos dinámicamente la sección de adondeir - playas recomendados
$(document).ready(function(){
	$.getJSON("../datos.json", function(datosJSON){
        
        $.each(datosJSON.datos.adondeir[2].playas, function(clave, valor){
            $('#cajainfojson3').append("<section>" + "<h4 class='h4enlaces'>" + valor["titulo"] + "</h4>"
            + "<p class='penlaces'>" + valor["subtitulo"] + "</p>" + "<p>" + valor["localizacion"] + "</p>"
            + "</section>");
        });
        
	});
});