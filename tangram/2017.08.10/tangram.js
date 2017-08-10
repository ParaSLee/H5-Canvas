window.onload=function(){
	var canvas = document.querySelector("#canvas");
	var context = canvas.getContext("2d");
	tangram(context);
}

function tangram(context){
	var tangramSide = 
	[
		[0,0,800,0,400,400,"#66bdcf"],
		[0,0,400,400,0,800,"#cefe68"],
		[800,0,800,400,600,600,600,200,"#f13c64"],
		[600,200,600,600,400,400,"#faf61c"],
		[400,400,600,600,400,800,200,600,"#a795c3"],
		[200,600,400,800,0,800,"#fa8ecc"],
		[800,400,800,800,400,800,"#f6ca29"]
	]

	for(var i=0;i<7;i++){
		drawCanvse(tangramSide[i],context);
	}
}

function drawCanvse(target,context){
	context.beginPath(); 
	context.moveTo(target[0],target[1]);
	context.lineTo(target[2],target[3]);
	context.lineTo(target[4],target[5]);
	if (target.length>6) {
		context.lineTo(target[6],target[7]);
	}
	context.lineTo(target[0],target[1]);
	context.closePath(); 

	context.fillStyle = target[target.length-1];
	context.fill();
	context.lineWidth=3;
	context.strockStyle="#333";
	context.stroke();
}