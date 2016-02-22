$(document).ready(function() {
	// Remove no-javascript class if js is enabled
	$("body.no-javascript").removeClass("no-javascript")

	$("audio").removeAttr("controls").each(function(i, audioElement) {
	    var audio = $(this);
	    var that = this;
	    $("#doc").append($('<a class="'+audio.attr("class")+'" href="#" title="'+audio.attr("title")+'"> <button type="button">'+audio.attr("title")+'</button> </a>').click(function() {
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