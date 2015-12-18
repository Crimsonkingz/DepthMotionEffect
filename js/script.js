// Attempt to recreate this
// https://gfycat.com/UnconsciousAntiqueIcelandgull

var depthCanvas = document.getElementById("depthCanvas");
var ctx = depthCanvas.getContext("2d");

var canvasWidth, 
	canvasHeight;

var requestAnimFrame = function() {

};


var init = function() {
	resize()
	drawLines();
	// render();

};


window.addEventListener("resize", function() {
	resize();
});

var portraitResize = function() {
	depthCanvas.width = window.innerWidth * 0.8;
	depthCanvas.height = window.innerWidth * 0.8;

	canvasWidth = depthCanvas.width;
	canvasHeight = depthCanvas.height;

};

var landscapeResize = function() {
	depthCanvas.height = window.innerHeight * 0.8;
	depthCanvas.width = window.innerHeight * 0.8;

	canvasWidth = depthCanvas.width;
	canvasHeight = depthCanvas.height;
	
};

var resize = function() {
	if (window.innerWidth > window.innerHeight) {
		landscapeResize();
	}
	else if (window.innerHeight > window.innerWidth) {
		portraitResize();
	}
	
	
};


var render = function() {
	requestAnimFrame(render);
};

var drawLines = function() {
	var x1 = 0.1*canvasWidth;
	
	
	var x2 = 0.9*canvasWidth;
	

	
	var y3 = 0.8*canvasHeight;

	
	ctx.strokeStyle = "white";
	ctx.lineWidth = 10;

	// LH vertical line
	ctx.beginPath();
	
	ctx.moveTo(x1, 0);
	ctx.lineTo(x1,canvasHeight);
	

	// // RH vertical line
	
	ctx.moveTo(x2,0);
	ctx.lineTo(x2,canvasHeight);
	

	// // Bottom horizontal line
	
	ctx.moveTo(0,y3);
	ctx.lineTo(canvasWidth,y3);
	ctx.stroke();

	
};

init();