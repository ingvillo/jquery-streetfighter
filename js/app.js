$(document).ready(function(){
 
	$('.ryu').mouseenter(function(){
		$('.ryu-throwing').hide();
 		$('.ryu-still').hide();
 		$('.ryu-cool').hide();
 		$('.ryu-ready').show();
 	})

	.mouseleave(function(){
 		$('.ryu-ready').hide();
 		$('.ryu-cool').hide();
 		$('.ryu-throwing').hide();
 		$('.ryu-still').show();
 	})

	.mousedown(function(){
   		playHadouken();
   		$('.ryu-still').hide();
 		$('.ryu-ready').hide();
 		$('.ryu-cool').hide();
 		$('.ryu-throwing').show();
 		$('.hadouken').finish().show()
 		.animate(
 			{'left': '500px'},
 			500,
 			function() {
 				$(this).hide();
 				$(this).css('left', '-180px');
 			}
 			);
 	})

	.mouseup(function(){
		$('.ryu-throwing').hide();
		$('.ryu-cool').hide();
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	});


	function playHadouken () {
		$('#hadouken-sound')[0].volume=0.3
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
	};

	$(document).keydown(function(event){
    	if (event.which == 88){
      		$('.ryu-ready').hide();
      		$('.ryu-still').hide();
      		$('.ryu-throwing').hide();
      		$('.ryu-cool').show();
    	}
	})

	.keyup(function(event){
    	if (event.which == 88){
     		$('.ryu-cool').hide();
      		$('.ryu-ready').hide();
      		$('.ryu-throwing').hide();
     		$('.ryu-still').show();
      	}
  	});


});