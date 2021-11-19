
//Cargamos dinámicamente la sección de adondeir - museos recomendados
$(document).ready(function(){
	$.getJSON("../datos.json", function(datosJSON){
        
        $.each(datosJSON.datos.adondeir[0].museos, function(){
            $('#cajainfojson1').append("<section>" + "<h4 class='h4enlaces'>" + this["titulo"] + "</h4>"
            + "<p class='penlaces'>" + this["subtitulo"] + "</p>" + "<p>" + this["localizacion"] + "</p>"
            + "<p>" + this["telefono"] + " </p>" + this["sitioweb"] + "</section>");
        });
        
	});
});


//Cargamos dinámicamente la sección de adondeir - parques temáticos recomendados
$(document).ready(function(){
	$.getJSON("../datos.json", function(datosJSON){
        
        $.each(datosJSON.datos.adondeir[1].parquesnaturales, function(){
            $('#cajainfojson2').append("<section>" + "<h4 class='h4enlaces'>" + this["titulo"] + "</h4>"
            + "<p class='penlaces'>" + this["subtitulo"] + "</p>" + "<p>" + this["ruta"] + "</p>"
            + "</section>");
        });
        
	});
});


//Cargamos dinámicamente la sección de adondeir - playas recomendados
$(document).ready(function(){
	$.getJSON("../datos.json", function(datosJSON){
        
        $.each(datosJSON.datos.adondeir[2].playas, function(){
            $('#cajainfojson3').append("<section>" + "<h4 class='h4enlaces'>" + this["titulo"] + "</h4>"
            + "<p class='penlaces'>" + this["subtitulo"] + "</p>" + "<p>" + this["localizacion"] + "</p>"
            + "</section>");
        });
        
	});
});