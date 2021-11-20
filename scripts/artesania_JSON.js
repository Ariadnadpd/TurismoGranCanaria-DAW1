//Cargamos dinámicamente la sección de artesania - alfareria recomendados
$(document).ready(function(){
	$.getJSON("../datos.json", function(datosJSON){
        
        $.each(datosJSON.datos.artesania[0].alfareria, function(){
            $('#cajainfojson1').append("<section>" + "<h4 class='h4enlaces'>" + this["titulo"] + "</h4>"
            + "<p class='penlaces'>" + this["subtitulo"] + "</p>" + "<p>" + this["localizacion"] + "</p>"
            + "<p>" + this["telefono"] + " </p>" + "<p>" + this["email"] + "</p>" 
            + "<p>" + this["informacion"] + "</p>" + "<p>" + this["rss_facebook"] + "</p>" + "</section>");
        });
        
	});
});

//Cargamos dinámicamente la sección de artesania - canteria recomendados
$(document).ready(function(){
	$.getJSON("../datos.json", function(datosJSON){
        
        $.each(datosJSON.datos.artesania[1].canteria, function(){
            $('#cajainfojson2').append("<section>" + "<h4 class='h4enlaces'>" + this["titulo"] + "</h4>"
            + "<p class='penlaces'>" + this["subtitulo"] + "</p>" + "<p>" + this["localizacion"] + "</p>"
            + "<p>" + this["telefono"] + " </p>" + "<p>" + this["informacion"] + "</p>" 
            + "<p>" + this["rss_facebook"] + "</p>" + "</section>");
        });
        
	});
});


//Cargamos dinámicamente la sección de artesania - canteria recomendados
$(document).ready(function(){
	$.getJSON("../datos.json", function(datosJSON){
        
        $.each(datosJSON.datos.artesania[2].cuchilloscanarios, function(){
            $('#cajainfojson3').append("<section>" + "<h4 class='h4enlaces'>" + this["titulo"] + "</h4>"
            + "<p class='penlaces'>" + this["subtitulo"] + "</p>" + "<p>" + this["localizacion"] + "</p>"
            + "<p>" + this["telefono"] + " </p>" + "<p>" + this["informacion"] + "</p>" 
            + "<p>" + this["rss_facebook"] + "</p>" + "</section>");
        });
        
	});
});

//Cargamos dinámicamente la sección de artesania - trajestradicionales recomendados
$(document).ready(function(){
	$.getJSON("../datos.json", function(datosJSON){
        
        $.each(datosJSON.datos.artesania[3].trajestradicionales, function(){
            $('#cajainfojson4').append("<section>" + "<h4 class='h4enlaces'>" + this["titulo"] + "</h4>"
            + "<p class='penlaces'>" + this["subtitulo"] + "</p>" + "<p>" + this["localizacion"] + "</p>"
            + "<p>" + this["telefono"] + " </p>" + "<p>" + this["informacion"] + "</p>" 
            + "<p>" + this["rss_facebook"] + "</p>" + "<p>" + this["rss_instagram"] + "</p>" + "</section>");
        });
        
	});
});

