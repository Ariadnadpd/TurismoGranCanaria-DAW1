
//Cargamos dinámicamente la sección de gastronomia - platos recomendados
$(document).ready(function(){
	$.getJSON("../datos.json", function(datosJSON){
        
        $.each(datosJSON.datos.gastronomia[0].platos, function(){
            $('#cajainfojson1').append("<section>" + "<h4 class='h4enlaces'>" + this["titulo"] + "</h4>"
            + "<p class='penlaces'>" + this["subtitulo"] + "</p>" + "<p>" + this["localizacion"] + "</p>"
            + "<p>" + this["telefono"] + " </p>" + "<p>" + this["informacion"] + "</p>"
            + "<p>" + this["rss_facebook"] + "</p>" + "</section>");
        });
        
	});
});

// "<p>" + this["rss_instagram"] + "</p>" 

//Cargamos dinámicamente la sección de gastronomia - postres recomendados
$(document).ready(function(){
	$.getJSON("../datos.json", function(datosJSON){
        
        $.each(datosJSON.datos.gastronomia[1].postres, function(){
            $('#cajainfojson2').append("<section>" + "<h4 class='h4enlaces'>" + this["titulo"] + "</h4>"
            + "<p class='penlaces'>" + this["subtitulo"] + "</p>" + "<p>" + this["localizacion"] + "</p>"
            + "<p>" + this["telefono"] + " </p>" + "<p>" + this["rss_facebook"] + "</p>"
            + "<p>" + this["rss_instagram"] + "</p>" + "<p>" + this["informacion"] + "</p>" + "</section>");
        });
        
	});
});

