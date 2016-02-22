$(document).ready(function(){
	// Remove no-javascript class if js is enabled
	$("body.no-javascript").removeClass("no-javascript")

	$("audio").removeAttr("controls").each(function(i, audioElement) {
	    var audio = $(this);
	    var that = this;
	    $("#doc").append($('<li><a class="'+audio.attr("class")+'" href="#" title="'+audio.attr("title")+'"><img src="img/' + audio.attr("class") + '.png"/></a></li>').click(function() {
	    	var player = document.getElementById(audio.attr("class"));

	    	if(! variable_here){
			    that.play()
			};

	    	if(player.paused){
	    		player.play();
	    	}
	    	else{
	    		player.pause();
	    		player.currentTime = 0;
	    	}
	    }));
	});

});