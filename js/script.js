$(document).ready(function(){
	// Remove no-javascript class if js is enabled
	$("body.no-javascript").removeClass("no-javascript")

	$("audio").removeAttr("controls").each(function(i, audioElement) {
	    var audio = $(this);
	    var that = this;
	    var curPlaying;
	    $("#doc").append($('<li><a class="'+audio.attr("class")+'" href="#" title="'+audio.attr("title")+'"><img src="img/' + audio.attr("class") + '.png"/></a></li>').click(function() {
	        e.preventDefault();
	        var song = $(this).next('audio')[0];
	        if(song.paused){
	            song.play();
	            if(curPlaying) $("audio", "#"+curPlaying)[0].pause();
	        } else { song.pause(); }
	        curPlaying = $(this).parent()[0].id;
	    });
	});

});