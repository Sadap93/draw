var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var padding = 5;
var slide = 15;
var size = 50;
var positionX = canvasWidth-canvasWidth+slide;
var positionY = canvasHeight-canvasHeight+slide;
var number = 5;

for(let j = 1; j<6; j++){
    
    for(let i = 0; i < number; i++){
        
        context.fillStyle = "rgba(255,165,0,.5)";
        context.fillRect(positionX, positionY, size, size);
        positionY+=padding+size;
        
    }
    number = number - 1
    positionX+=padding+size;
    positionY = slide+(size+padding)*j;
}

/*
---TASK: 12---

---TASK: 11---

var padding = 20;
var size = 45;
var positionX = canvasWidth-canvasWidth+padding;
var positionY = canvasHeight-canvasHeight+padding;

for(let i = 0; i<10; i++){
    context.fillStyle = "rgba(255,165,0,.5)";
    context.fillRect(positionX, positionY, size, size);
    positionX+=size/2;
    positionY+=size/2;
}

---TASK: 10---
context.beginPath();
context.moveTo(canvasWidth/2,canvasHeight-canvasHeight);
context.lineTo(canvasWidth/2,canvasHeight);
context.strokeStyle = "red";
context.stroke();

context.beginPath();
context.moveTo(canvasWidth-canvasWidth,canvasHeight/2);
context.lineTo(canvasWidth,canvasHeight/2);
context.strokeStyle = "green";
context.stroke();


---TASK: 9---
let size = 150;

context.beginPath();
context.moveTo(canvasWidth/2-size/2,canvasHeight/2+size/2);
context.lineTo(canvasWidth/2,canvasHeight/2-size/2);
context.lineTo(canvasWidth/2+size/2, canvasHeight/2+size/2);
context.lineTo(canvasWidth/2-size/2,canvasHeight/2+size/2);
context.strokeStyle = 'rgba(128,128,128,.5)';
context.stroke();
context.fillStyle = 'rgba(255,165,0,.5)';
context.fill();


context.beginPath();
context.moveTo(0,canvasHeight);
context.lineTo(canvasWidth,0);
context.strokeStyle = 'red';
context.stroke();

context.beginPath();
context.moveTo(0,0);
context.lineTo(canvasWidth,canvasHeight);
context.strokeStyle = 'red';
context.stroke();

var sizeW = 250;
var sizeH = 50;

var w = canvasWidth/2-sizeW/2;
var h = canvasHeight/2-sizeH/2;

context.fillStyle = 'red';
context.fillRect(w,h+sizeH,sizeW,sizeH);

context.fillStyle = 'white';
context.fillRect(w,h,sizeW,sizeH);

context.fillStyle = 'green';
context.fillRect(w,h-sizeH,sizeW,sizeH);

var size = 100;

context.fillStyle = "rgba(255,0,0,.5)";
context.fillRect( (canvasWidth/2) - (size/4) - (size/2) , (canvasHeight/2) - (size/4) - (size/2) , size , size );

context.fillStyle = "rgba(0,0,255,.5";
context.fillRect( (canvasWidth/2) - (size/4) , (canvasHeight/2) - (size/4) , size , size );


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




