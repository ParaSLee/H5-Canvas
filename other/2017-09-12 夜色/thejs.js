var WIDTH = 1200;
var HEIGHT = 800;







window.onload = function(){
	var canvas = document.querySelector("#canvas");
	var context = canvas.getContext("2d");


	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	drawBg(context);

	drawStar(context,200);

	drawMoon(context,30);

	drawGround(context);

	drawText(context);

}





function drawBg(context){
	context.beginPath();

	var grd = context.createLinearGradient(0, 0, 0, HEIGHT);
	grd.addColorStop(0.0, "#000");
	grd.addColorStop(1.0, "#031544");

	context.fillStyle = grd;
	context.fillRect(0, 0, WIDTH, HEIGHT);
	
	context.closePath();

}

function drawGround(context){
	context.save();

	context.beginPath();

	context.moveTo(0, HEIGHT*0.75);
	context.bezierCurveTo(395,800, 830,450, WIDTH,523);
	context.lineTo(WIDTH,HEIGHT);
	context.lineTo(0,HEIGHT);

	var grd = context.createLinearGradient(0, HEIGHT, 0, 594);
	grd.addColorStop(0.0, "#101E01");
	grd.addColorStop(1.0, "#042D03");

	context.fillStyle = grd;

	context.closePath();

	context.fill();

	context.restore();
}

function drawMoon(context, angle){
	context.save();

	context.translate(WIDTH*0.85, HEIGHT*0.2);
	context.scale(1.3,1.3)
	context.rotate(angle/180*Math.PI);

	context.beginPath();

	context.arc(0, 0, 60, 1.5*Math.PI, 0.5*Math.PI);
	context.quadraticCurveTo(0+70 ,10 ,0 ,0-60)


	context.lineWidth = 3;
	context.strokeStyle = "#F6F4DC";
	context.fillStyle = "#F8F051";


	context.closePath();

	context.fill();
	context.stroke();

	

	context.restore()
}

function drawStar(context,nub){
	for(var i = 0; i<nub; i++){
		context.save();
		context.beginPath();

		var radius = Math.random()*8+5;

		context.translate(Math.random()*(WIDTH-2*radius)+radius, Math.random()*HEIGHT*0.6+radius);
		context.rotate(Math.random()*Math.PI);


		for(var j=0;j<5;j++){
			context.lineTo(Math.cos((18+72*j)/180*Math.PI) * radius, - Math.sin((18+72*j)/180*Math.PI) * radius);
      context.lineTo(Math.cos((54+72*j)/180*Math.PI) * radius/2, - Math.sin((54+72*j)/180*Math.PI) * radius/2);
		}


		context.closePath();

		context.fillStyle = "#FCFA46";
		context.fill();


		context.restore()
	}
}

function drawText(context){
	context.beginPath();

	context.font = "bold 40px Monaco";
	context.fillStyle = "#77c34f";

	context.fillText("原谅草原的夜晚", WIDTH*0.7, HEIGHT*0.85);

	context.closePath();
}
