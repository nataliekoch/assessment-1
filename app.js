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
			$el.append("<div>Property ID: " + randomNumber(0, 1000) + "</div>");
			$el.append("<div>" + randomNumber(1000, 9999) +  " Sq. Ft.</div>");
			$el.append("<div>$" + randomNumber(1, 50) +  " /Sq. Ft.</div>");
			$el.append("<button class='deleteButton'>Remove</button>")
			$el.append("<button class='changeButton'>Change</button>")

			$el.hide()
				.slideDown(500);
			
}
function randomNumber(min, max){
	return Math.floor(Math.random() * (1 + max - min) + min);
};
