$(document).ready(function(){
	
	$('.popup').hide();
	$('#prnj').hide();
	$('#cambiar').hide();
	$('#empezar').hide();
	
	$('.imgns').hover(
		function(){ $(this).addClass('hover')},
		function(){ $(this).removeClass('hover');}
		);
	
	$('.popupContactClose').hover(
			function(){ $(this).addClass('hover')},
			function(){ $(this).removeClass('hover');}
	);
	
	$('#cambiar p').hover(
			function(){ $(this).addClass('hover')},
			function(){ $(this).removeClass('hover');}
	);
	
	$('#cambiar p').click(function(){
		$('#prnj').hide();
		$('#warrior1').show();
		$('#cleric1').show();
		$('#valkyrie1').show();
		$('#contenedor p').show();
		$('#cambiar').hide();
		$('#empezar').hide();
		
	});
	
	$('.popupContactClose').click(function(){
		$('.popup').hide();
	});	
	
	$('#warrior1').click(function(){	
		$('#popupContact1').show();
	});
	
	$('#cleric1').click(function(){		
		$('#popupContact2').show();
	});
	
	$('#valkyrie1').click(function(){		
		$('#popupContact3').show();	
	});
	
	var personaje;
	
	$('#boton1').click(function(){		
		$('#contenedor p').hide();
		$('#cleric1').hide();
		$('#valkyrie1').hide();
		$('.popup').hide();		
		personaje = 'warrior';
		
	});
	$('#boton2').click(function(){
		$('#contenedor p').hide();
		$('#warrior1').hide();
		$('#valkyrie1').hide();
		$('.popup').hide();
		personaje = 'cleric';
	});
	
	$('#boton3').click(function(){
		$('#contenedor p').hide();
		$('#warrior1').hide();
		$('#cleric1').hide();
		$('.popup').hide();	
		personaje = 'valkyrie';
	});
	
	 $('.boton').click(function(){
		$('#prnj').show(); 
		$('#cambiar').show();
		$('#empezar').show();
		$('#prnj').html('<p>Has elegido a '+personaje+'</p>'); 	
	}); 
	
	
	
});