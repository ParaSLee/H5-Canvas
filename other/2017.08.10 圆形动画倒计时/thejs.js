var MGTOP = 100;
// var RADIUS = 8;
var RADIUS;
var MGLEFT;
// var WIDTH = 1024;
// var HEIGHT = 800;
var WIDTH;
var HEIGHT;
var BALL = [];
var OLDTIME;
const colors = ["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"]

window.onload=function(){
	var canvas = document.querySelector("#canvas");
	WIDTH = document.body.clientWidth;
	HEIGHT = document.body.clientHeight;
	console.log(HEIGHT)
	RADIUS = Math.round(WIDTH*4/5/108)-1;
	MGLEFT = Math.round(WIDTH/10);

	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	var context = canvas.getContext("2d");
	OLDTIME = new Date();
	// timing(context);
	setInterval(function(){
		timing(context);
		updata();
	},50)
}

function timing(context){

	context.clearRect(0,0,WIDTH, HEIGHT);

	var nowtime = new Date();
	var hour = nowtime.getHours();
	var min = nowtime.getMinutes();
	var sec = nowtime.getSeconds();
	// console.log(hour+":"+min+":"+sec);
	 
	

	drawCanvse(MGLEFT, MGTOP, parseInt(hour/10), context);
	drawCanvse(MGLEFT, MGTOP, parseInt(hour%10), context);
	drawCanvse(MGLEFT, MGTOP, 10, context);
	drawCanvse(MGLEFT, MGTOP, parseInt(min/10), context);
	drawCanvse(MGLEFT, MGTOP, parseInt(min%10), context);
	drawCanvse(MGLEFT, MGTOP, 10, context);
	drawCanvse(MGLEFT, MGTOP, parseInt(sec/10), context);
	drawCanvse(MGLEFT, MGTOP, parseInt(sec%10), context);
	// MGLEFT = 50;
	MGLEFT = Math.round(WIDTH/10);

	for( var i = 0 ; i < BALL.length ; i ++ ){
    context.fillStyle=BALL[i].color;

    context.beginPath();
    context.arc( BALL[i].x , BALL[i].y , RADIUS , 0 , 2*Math.PI , true );
    context.closePath();

    context.fill();
  }

}

function drawCanvse(X, Y, target, context){
	for(var i = 0; i < digit[target].length; i++){
		for(var j = 0; j < digit[i].length; j++){
			if (digit[target][i][j] == 1) {
				context.beginPath();
				context.arc(X+j*(RADIUS+1)*2+(RADIUS+1), Y+i*(RADIUS+1)*2, RADIUS, 0, 2*Math.PI);

				context.stroke()
			}
		}
	}
	if (target==10) {
		MGLEFT = MGLEFT+(RADIUS+1)*9
	}else{
		MGLEFT = MGLEFT+(RADIUS+1)*15
	}
}


function updata(){
	var newtime = new Date();

	if (newtime.getSeconds()!=OLDTIME.getSeconds()) {


		if (newtime.getHours() != OLDTIME.getHours()) {
			if (newtime.getHours()/10 != OLDTIME.getHours()/10) {
				addBall(MGLEFT + 0 , MGTOP, parseInt(newtime.getHours()/10));
			}
			if (newtime.getHours()%10 != OLDTIME.getHours()%10) {
				addBall(MGLEFT + 15*(RADIUS+1) , MGTOP, parseInt(newtime.getHours()%10));
			}
		}

		if (parseInt(newtime.getMinutes()) != parseInt(OLDTIME.getMinutes())) {
			if (parseInt(newtime.getMinutes()/10) != parseInt(OLDTIME.getMinutes()/10)) {
				addBall(MGLEFT + 39*(RADIUS+1) , MGTOP, parseInt(newtime.getMinutes()/10));
			}
			if (parseInt(newtime.getMinutes()%10) != parseInt(OLDTIME.getMinutes()%10)) {
				addBall(MGLEFT + 54*(RADIUS+1) , MGTOP, parseInt(newtime.getMinutes()%10));
			}
		}

		if (parseInt(newtime.getSeconds()) != parseInt(OLDTIME.getSeconds())) {
			if (parseInt(newtime.getSeconds()/10) != parseInt(OLDTIME.getSeconds()/10)) {
				addBall(MGLEFT + 78*(RADIUS+1) , MGTOP, parseInt(newtime.getSeconds()/10));
			}
			if (parseInt(newtime.getSeconds()%10) != parseInt(OLDTIME.getSeconds()%10)) {
				addBall(MGLEFT + 93*(RADIUS+1) , MGTOP, parseInt(newtime.getSeconds()%10));
			}

		}

		OLDTIME = newtime;
		
	}
	updataBall();
}

function addBall(x,y,num){
	for(var i = 0; i < digit[num].length; i++){
		for(var j = 0; j < digit[i].length; j++){
			if (digit[num][i][j] == 1) {
				var aBall = {
			    x:x+j*2*(RADIUS+1)+(RADIUS+1),
			    y:y+i*2*(RADIUS+1)+(RADIUS+1),
			    g:1.5+Math.random(),
			    vx:Math.pow( -1 , Math.ceil( Math.random()*1000 ) ) * 4,
			    vy:-5,
			    color: colors[ Math.floor( Math.random()*colors.length ) ]
				}

				BALL.push( aBall )
			}
		}
	}
}

function updataBall(){
	for(var i=0; i<BALL.length; i++){
		BALL[i].x += BALL[i].vx;
		BALL[i].y += BALL[i].vy;
		BALL[i].vy += BALL[i].g;

		if (BALL[i].y >= HEIGHT-RADIUS) {
			BALL[i].y = HEIGHT-RADIUS;
			BALL[i].vy = -BALL[i].vy*0.75;
		}
	}

	var cnt = 0
	for(var i=0; i<BALL.length; i++){
		if (BALL[i].x + RADIUS > 0 && BALL[i].x - RADIUS <WIDTH) {
			BALL[cnt++] = BALL[i]
		}
	}
	while(BALL.length > cnt){
		BALL.pop()
	}
	
}



