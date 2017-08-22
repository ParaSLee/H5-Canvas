

window.onload=function(){
	var canvas = document.querySelector("#canvas");
	var context = canvas.getContext("2d");
	var ball = {x:512, y:100, r:20, g:2, vx:-4, vy:0, color:"#0045588"}
	
	setInterval(function(){
		timing(context,ball);
		updata(ball);
	},50)

}

function timing(context,ball){
	context.clearRect(0,0, context.canvas.width, context.canvas.height)

	context.beginPath();
	context.arc(ball.x, ball.y, ball.r, 0, 2*Math.PI);

	context.fillStyle = ball.color;
	context.fill()
}

function updata(ball){
	ball.y += ball.vy;
	ball.x += ball.vx;
	ball.vy += ball.g;

	if (ball.y >= 800-ball.r) {
		ball.y = 800-ball.r;
		ball.vy = -ball.vy*0.8
	}
	if (ball.y <= 0+ball.r) {
		ball.y = 0+ball.r;
		ball.vy = -ball.vy*0.8
	}
	if (ball.x <= 0+ball.r) {
		ball.x = 0+ball.r;
		ball.vx = -ball.vx*0.8
	}
	if (ball.x >= 1024-ball.r) {
		ball.x = 1024-ball.r;
		ball.vx = -ball.vx*0.8
	}
}


function drawCanvse(X, Y, target, context){
	
}
