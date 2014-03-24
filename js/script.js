(function(){

	// logo click, polygon move
	$(".envato-logo").on("click", function(e){
	  e.preventDefault();
	  $("body").toggleClass("curtain-open");
	});

	// message data
	var cycle_array = [
	    {
	        color: "#c479b7",
	        text: "Here's some text and whatnot."
	    },
	    {
	        color: "#c4a179",
	        text: "SVG is amazingly powerful."
	    },
	    {
	        color: "#222",
	        text: "Diagonals are in."
	    }
	]

	// message intervals
	var i = 0,
	    messageHolder = $(".message"),
	    poly = $("svg polygon").first();
	var interval = setInterval(function(){
	    i = i%cycle_array.length;
	    var nextObj = cycle_array[i];
	    $("svg polygon").first().css({
	        fill : nextObj.color
	    });
	    $(".message").html(nextObj.text);
	    i++;
	}, 3000);

}());


// jQuery-less version
// (function(){

// 	// logo click, polygon move
// 	var envatoLogo = document.querySelector(".envato-logo");
// 	envatoLogo.onclick = function(){
// 		document.querySelector("body").classList.toggle("curtain-open");
// 	}

// 	// message data
// 	var cycle_array = [
// 	    {
// 	        color: "#c479b7",
// 	        text: "Here's some text and whatnot."
// 	    },
// 	    {
// 	        color: "#c4a179",
// 	        text: "SVG is amazingly powerful."
// 	    },
// 	    {
// 	        color: "#222",
// 	        text: "Diagonals are in."
// 	    }
// 	]

// 	// message intervals
// 	var i = 0,
// 	    messageHolder = document.querySelector(".message"),
// 	    poly = document.querySelector("polygon");
// 	var interval = setInterval(function(){
// 	    i = i%cycle_array.length;
// 	    var nextObj = cycle_array[i];
// 	    poly.style.fill = nextObj.color;
// 	    document.querySelector(".message").innerHTML = nextObj.text;
// 	    i++;
// 	}, 3000);

// }());