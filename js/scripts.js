$(document).ready(function() {
	$(".madlib-input").on("change", function() {
		var empty = $(".madlib-content").find(".madlib-input").filter(function() {
	        return this.value === "";
	    });
	    if (!empty.length) {
	    	alert("You finished!");
	    }
	});
});