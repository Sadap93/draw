var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var size = 100;

context.fillStyle = "rgba(255,0,0,.5)";
context.fillRect( (canvasWidth/2) - (size/4) - (size/2) , (canvasHeight/2) - (size/4) - (size/2) , size , size );

context.fillStyle = "rgba(0,0,255,.5";
context.fillRect( (canvasWidth/2) - (size/4) , (canvasHeight/2) - (size/4) , size , size );

/*
var padding = 10;

context.fillStyle = 'green';
context.fillRect(canvasWidth-size-padding,canvasHeight-size-padding,size,size);

context.fillStyle = 'orange';
context.fillRect(125,50,200,200);

context.beginPath();
context.moveTo(55,70);
context.lineTo(150,100);
context.strokeStyle = 'orange';
context.stroke();

context.beginPath();
context.moveTo(0,300);
context.lineTo(450,0);
context.strokeStyle = 'red';
context.stroke();

context.fillStyle = 'black';
context.fillRect(canvasWidth/2,canvasHeight/2,canvasWidth/2,canvasHeight/2);

*/




