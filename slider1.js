var myvar=setInterval(setcolor,1000);

function setcolor(){
	var x=document.getElementById("container");
	x.style.backgroundColor = x.style.backgroundColor == "rgb(51, 116, 255)" ? "rgb(230, 238, 255)" : "rgb(51, 116, 255)";
}



$("img").click(function(){
	$("#container").fadeOut();
	// $(".button").fadeIn();
})

if($("img").click(function(){
	$(".button").fadeIn();
}))
{
	$(".button").fadeIn();
}
else
{
	$(".button").fadeOut();
}

$(".button").click(function(){
	$("#container").fadeIn();
})