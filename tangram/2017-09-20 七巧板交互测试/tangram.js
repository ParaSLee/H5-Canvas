var tangramSide = new Array();
var context;



window.onload=function(){
	var canvas = document.querySelector("#canvas");
	context = canvas.getContext("2d");
	tangram(context);

	canvas.addEventListener("mouseup",change);
}

function tangram(context){
	tangramSide = 
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


function change(event){
	var x = event.clientX - canvas.getBoundingClientRect().left;
  var y = event.clientY - canvas.getBoundingClientRect().top;

  for(var i=0; i<tangramSide.length; i++){
  	context.beginPath();

  	context.moveTo(tangramSide[i][0],tangramSide[i][1]);
  	context.lineTo(tangramSide[i][2],tangramSide[i][3]);
  	context.lineTo(tangramSide[i][4],tangramSide[i][5]);
  	if (tangramSide[i].length>6) {
  		context.lineTo(tangramSide[i][6],tangramSide[i][7]);
  	}
  	context.lineTo(tangramSide[i][0],tangramSide[i][1]);

  	if(context.isPointInPath(x,y)){
  		var color = "rgb("+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+")";
  		console.log(color);
  		context.fillStyle = color;
  		context.lineWidth=3;
  		context.strockStyle="#333";
  		context.fill();
  		context.stroke();
  	}
  }
}