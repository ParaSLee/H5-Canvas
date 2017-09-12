var WIDTHD = 500;
var HEIGHT = 800;







window.onload = function(){
	var canvas = document.querySelector("#canvas");

	canvas.height = HEIGHT;
	canvas.width = WIDTHD;

	var context = canvas.getContext("2d");

	

	var grd = context.createLinearGradient(0,0,500,500);
	grd.addColorStop(0.0, "#fff");
	grd.addColorStop(1.0, "#000");
	context.fillStyle = grd;
	context.fillRect(0,0,300,300);
}