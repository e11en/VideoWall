$(function() {
    //startGihpy();
    //startGif();
});

function startGihpy(){
  $.getJSON( "http://api.giphy.com/v1/gifs/search?q=lick&api_key=dc6zaTOxFJmzC", function( data ) {
    $.each( data['data'], function( key, val ) {
      $(".giphy-container").append('<img src="' + val['images']['fixed_height']['url'] + '">');
    });
  });
}

function startGif(){
	for(var i = 1; i < 12; i++) {
		$(".gif-container").append('<img src="img/video-'+ i +'.gif">');
	}
	
}