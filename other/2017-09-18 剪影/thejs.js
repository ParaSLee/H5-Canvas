var WIDTH = 1200;
var HEIGHT = 800;







window.onload = function(){
	var canvas = document.querySelector("#canvas");
	var context = canvas.getContext("2d");


	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	// context.globalAlpha  = 0.5;
	// context.globalCompositeOperation = "source-in";

	context.fillStyle = "#F0F0F0";
	context.fillRect(0, 0, canvas.width, canvas.height);

	context.beginPath();

	context.rect(200,100,800,600);
	context.fillStyle = "rgba(61,241,243,1)";

	context.moveTo(250,150);
	context.lineTo(250,350);
	context.lineTo(450,350);
	context.lineTo(450,150);
	context.lineTo(250,150);

	context.moveTo(800,150);
	context.lineTo(550,350);
	context.lineTo(750,350);
	context.lineTo(800,150);

	context.arc(600,550,130,0,2*Math.PI,true);

	context.shadowColor = "gray";
	context.shadowOffsetX = 10;
	context.shadowOffsetY = 10;
	context.shadowBlur = 10;


	context.fill();

	context.closePath();
}

