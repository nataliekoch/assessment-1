var count = 0;

$(document).ready(function(){
//console.log("hi");

	$(".submit").on('click',  function(){
		appendDom();
		count++;
		$('#counter').html("<div>" + count + "</div>");

	});

	$("#container").on('click', '.deleteButton',  function(){
		$(this).parent().remove(".propertyid");

	});
	
	$("#container").on("click", '.changeButton', function() {
	    $(this).parent().toggleClass('color');

	});

});

function appendDom(){
			
	
			$("#container").append("<div class='propertyid color', </div>");
			var $el = $("#container").children().last();
			$el.append("<button class='deleteButton'>Remove</button>")
			$el.append("<button class='changeButton'>Change</button>")

			$el.hide()
				.slideDown(500);
			
}
