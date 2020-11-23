var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var space = 3;
var numberOfLine = canvasWidth/space;

for(i=0; i<numberOfLine; i++){
    
    context.beginPath();
    context.moveTo((canvasWidth-canvasWidth)+i*space,canvasHeight/2);
    if(i%2==1){
        context.lineTo(canvasWidth/2,canvasHeight-canvasHeight);
    }else if(i%2==0){
        context.lineTo(canvasWidth/2,canvasHeight);
    }
    context.strokeStyle = "rgba(255,0,0,.5)";
    context.stroke();
}

/*
---TASK: 17---

---TASK: 16---

var width = 20;
var height = 15;
var size = 50;
var positionX = canvasWidth-canvasWidth+width;
var positionY = canvasHeight-canvasHeight+height;

for(let i = 1; i<16; i++){
    if(i%15==0){
        context.fillStyle = "rgba(0,255,0,.5)";
    } else if(i%3==0){
        context.fillStyle = "rgba(0,0,255,.5)";
    } else if(i%5==0){
        context.fillStyle = "rgba(255,255,0,.5)";
    }else {
        context.fillStyle = "rgba(0,0,0,.5)";
    }
    context.fillRect(positionX, positionY, size, size);
    positionX+=width;
    positionY+=height;
}
---TASK: 15---


let padding = 10;
let hue = 360;

for(i=0; i<17; i++){
    
    context.fillStyle = "hsl("+ hue + ","+ "60%, 45%)";
    context.fillRect((canvasWidth-canvasWidth)+i*padding, (canvasHeight-canvasHeight)+i*padding, canvasWidth-i*2*padding, canvasHeight-i*2*padding);
    hue-=hue/17;
}

---TASK: 14---

let size = 100;
let space = 5;

for(i=0; i<30; i++){
    
    let padding = 120+space*i;
    
    context.beginPath();
    context.moveTo(padding,padding);
    context.lineTo(padding+size/2,padding-size);
    context.lineTo(padding+size,padding);
    context.lineTo(padding,padding);
    context.strokeStyle = "grey";
    context.stroke();
}
---TASK: 13---

var size = 30;
var padding = 5;

var red = 255;
var green = 79;
var blue = 120;

for(j=0; j<6; j++){

    let height=50+size*j+padding*j;  
    var width = 125;
    blue+=15; 
    
    for(i=0; i<6; i++){
        context.fillStyle = 'rgb(' + red + ',' + green + ',' + blue + ')';
        context.fillRect(width+size*i+padding*i, height, size, size);
        red-=7;
    }   
}

---TASK: 12---

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




