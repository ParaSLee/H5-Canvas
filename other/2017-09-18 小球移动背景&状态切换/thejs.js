var BALLS = new Array();
var NUB = 50;



window.onload=function(){
	var canvas = document.querySelector("#canvas");
	var context = canvas.getContext("2d");

	// var c = "lighter"
	// context.globalCompositeOperation = c;

	var btnA = document.getElementsByTagName("a");
	for(var i = 0; i<btnA.length;i++){
		btnA[i].onclick = function(){
			var kind = this.text;
			if (parseFloat(this.text)) {
				context.globalAlpha = this.text;
				context.globalCompositeOperation = "source-over";
			}else{
				context.globalAlpha = 1;
				context.globalCompositeOperation = this.text;
			}
		}
	}
	
	getBall();
	setInterval(function(){
		drawBall(context);
		updata(context);
	},33.3);





	
}

function getBall(){
	var r;
	var x;
	var y;
	var color;
	var vx;
	var vy;

	for(var i=0;i<NUB;i++){
		r = Math.random()*40+10;
		x = Math.random()*(1024-2*r)+r;
		y = Math.random()*(800-2*r)+r;
		color = "rgb("+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+")";
		vx = Math.random()*10-5;
		vy = Math.random()*10-5;

		var ball = {
			r : r,
			x : x,
			y : y,
			color : color,
			vx : vx,
			vy : vy
		}
		BALLS.push(ball);
	}
}

function drawBall(context){
	context.clearRect(0,0, context.canvas.width, context.canvas.height)
	for(var i=0;i<BALLS.length;i++){
	// console.log("执行")
		context.beginPath();

		context.fillStyle = BALLS[i].color;
		context.arc(BALLS[i].x, BALLS[i].y, BALLS[i].r, 0, Math.PI*2);
		context.fill();

		context.closePath();
	}
}

function updata(context){
	for(var i=0;i<BALLS.length;i++){
		if (BALLS[i].x+BALLS[i].r>1024||BALLS[i].x-BALLS[i].r<0) {
			BALLS[i].vx = -BALLS[i].vx;
		}
		if (BALLS[i].y+BALLS[i].r>800||BALLS[i].y-BALLS[i].r<0) {
			BALLS[i].vy = -BALLS[i].vy;
		}

		BALLS[i].x = BALLS[i].x+BALLS[i].vx;
		BALLS[i].y = BALLS[i].y+BALLS[i].vy;
		// console.log(BALLS[i].x);
		// console.log("y= "+BALLS[i].y);
	}
	// console.log("******")
}

function changeKind(context){
	console.log(this);
}


