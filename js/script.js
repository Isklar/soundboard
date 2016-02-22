$(document).ready(function() {
	// Remove no-javascript class if js is enabled
	$("body.no-javascript").removeClass("no-javascript")

	$("audio").removeAttr("controls").each(function(i, audioElement) {
	    var audio = $(this);
	    var that = this;
	    $("#doc").append($('<li><a class="'+audio.attr("class")+'" href="#" title="'+audio.attr("title")+'"> <button type="button" onclick="play_pause('+audio.attr("class")+')">'+audio.attr("title")+'</button> </a></li>').click(function() {
			if(that.paused){
	    		that.play()
	    	}
	    	else{
	    		that.pause();
	    		that.currentTime = 0;
	    	}
	    }));
	});

});

function play_pause(audioclass) {
	    	var player = document.getElementById(audioclass);

	    	if(player.paused){
	    		player.play()
	    	}
	    	else{
	    		player.pause();
	    		player.currentTime = 0;
	    	}
	    };