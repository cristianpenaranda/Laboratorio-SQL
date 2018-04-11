var link = "";

$(document).ready(function(){
	$('#cargar').load("ejemplos.html");

	$('p a').click(function(){
   		 link = $(this).attr('href');
   		 $("#contenedor").load(link+"."+"html");
   		 return false;
   });
});