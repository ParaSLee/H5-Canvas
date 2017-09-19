var WIDTH = 1200;
var HEIGHT = 800;

var ARC = null;
var ARC2 = null;




window.onload = function(){
	var canvas = document.querySelector("#canvas");
	var context = canvas.getContext("2d");


	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	ARC = {
		x : 450,
		y : 400,
		vx : Math.random()*20-10,
		vy : Math.random()*20-10,
		r : 200,
		vr : 10
	}
	ARC2 = {
		x : 650,
		y : 500,
		vx : Math.random()*20-10,
		vy : Math.random()*20-10,
		r : 100,
		vr : 10
	}


	setInterval(function(){
		draw(context);
		updata(context);
	},33.3)

}

function draw(context){

	context.clearRect(0, 0, WIDTH, HEIGHT);

	context.save();
	context.beginPath();

	var backgraoundImg = new Image();
	backgraoundImg.src = "bg2.jpg";

	context.drawImage(backgraoundImg, 0, 0);

	context.closePath();



	context.beginPath();
	
	// context.arc(ARC.x, ARC.y, ARC.r, 0, Math.PI*2);
	context.shadowOffsetX = 15; // 阴影Y轴偏移
	context.shadowOffsetY = 15; // 阴影X轴偏移
	context.shadowBlur = 14; // 模糊尺寸
	context.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色

	context.closePath();


	context.beginPath();

	context.arc(ARC.x, ARC.y, ARC.r, 0, Math.PI*2);

	context.arc(ARC2.x, ARC2.y, ARC2.r, 0, Math.PI*2);
	context.fill();

	context.clip();

	context.closePath();


	var backgraoundImg = new Image();
	backgraoundImg.src = "bg.jpg";

	context.drawImage(backgraoundImg, 0, 0);



	context.beginPath();
	
	context.arc(ARC2.x, ARC2.y, ARC2.r, 0, Math.PI*2);
	context.shadowOffsetX = 15; // 阴影Y轴偏移
	context.shadowOffsetY = 15; // 阴影X轴偏移
	context.shadowBlur = 14; // 模糊尺寸
	context.shadowColor = 'rgba(0, 0, 0, 0.5)'; // 颜色

	context.closePath();


	context.beginPath();

	context.arc(ARC2.x, ARC2.y, ARC2.r, 0, Math.PI*2);
	context.fill();

	context.clip();

	context.closePath();

	var backgraoundImg = new Image();
	backgraoundImg.src = "bg3.jpg";

	context.drawImage(backgraoundImg, 0, 0);





	context.restore();
}

function updata(context){

	if (ARC.x + ARC.r >= WIDTH || ARC.x - ARC.r <= 0) {
		var thevx = ARC.vx;
		thevx = -thevx;
		ARC.vx = thevx;
		ARC.r += ARC.vr;

		if(ARC.x + ARC.r >= WIDTH){
			ARC.x = ARC.x - (ARC.x + ARC.r - WIDTH);
		}
		if (ARC.x - ARC.r <= 0) {
			ARC.x = ARC.x - (ARC.x - ARC.r);
		}
		if (ARC.r >= 390) {
			ARC.vr = -10;
		}
		if (ARC.r <= 200) {
			ARC.vr = 10;
		}
	}
	if (ARC.y + ARC.r >= HEIGHT || ARC.y - ARC.r <= 0) {
		var thevy = ARC.vy;
		thevy = -thevy;
		ARC.vy = thevy;
		ARC.r += ARC.vr;

		if(ARC.y + ARC.r >= HEIGHT){
			ARC.y = ARC.y - (ARC.y + ARC.r - HEIGHT);
		}
		if (ARC.y - ARC.r <= 0) {
			ARC.y = ARC.y - (ARC.y - ARC.r);
		}
		if (ARC.r >= 390) {
			ARC.vr = -10;
		}
		if (ARC.r <= 200) {
			ARC.vr = 10;
		}
	}

	ARC.x += ARC.vx;
	ARC.y += ARC.vy;

	if (ARC2.x + ARC2.r >= WIDTH || ARC2.x - ARC2.r <= 0) {
		var thevx = ARC2.vx;
		thevx = -thevx;
		ARC2.vx = thevx;
		ARC2.r += ARC2.vr;

		if(ARC2.x + ARC2.r >= WIDTH){
			ARC2.x = ARC2.x - (ARC2.x + ARC2.r - WIDTH);
		}
		if (ARC2.x - ARC2.r <= 0) {
			ARC2.x = ARC2.x - (ARC2.x - ARC2.r);
		}
		if (ARC2.r >= 390) {
			ARC2.vr = -10;
		}
		if (ARC2.r <= 200) {
			ARC2.vr = 10;
		}

		

		
	}
	if (ARC2.y + ARC2.r >= HEIGHT || ARC2.y - ARC2.r <= 0) {
		var thevy = ARC2.vy;
		thevy = -thevy;
		ARC2.vy = thevy;
		ARC2.r += ARC2.vr;
		
		if(ARC2.y + ARC2.r >= HEIGHT){
			ARC2.y = ARC2.y - (ARC2.y + ARC2.r - HEIGHT);
		}
		if (ARC2.y - ARC2.r <= 0) {
			ARC2.y = ARC2.y - (ARC2.y - ARC2.r);
		}
		if (ARC2.r >= 390) {
			ARC2.vr = -10;
		}
		if (ARC2.r <= 200) {
			ARC2.vr = 10;
		}

		
	}

	ARC2.x += ARC2.vx;
	ARC2.y += ARC2.vy;
}