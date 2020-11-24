var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var base = 100;
var altitude = 86.6;

function drawTriangle(positionX, positionY) {
    for (var rowCounter = 0; rowCounter < 3; rowCounter++) {
        for (var triangleCounter = 0; triangleCounter <= rowCounter; triangleCounter++) {
            context.beginPath();
            context.moveTo(positionX - rowCounter * base / 2 + triangleCounter * base, positionY + rowCounter * altitude);
            context.lineTo(positionX - (rowCounter + 1) * base / 2 + triangleCounter * base, positionY + (rowCounter + 1) * altitude);
            context.lineTo(positionX - (rowCounter - 1) * base / 2 + triangleCounter * base, positionY + (rowCounter + 1) * altitude);
            context.lineTo(positionX - rowCounter * base / 2 + triangleCounter * base, positionY + rowCounter * altitude);
            if (rowCounter === 0) {
                context.strokeStyle = 'rgb(227,98,102)';
                context.fillStyle = 'rgb(227,98,102)';
            } else if (rowCounter === 1) {
                context.strokeStyle = 'rgb(38,172,73)';
                context.fillStyle = 'rgb(38,172,73)';
            } else {
                context.strokeStyle = 'rgb(34,128,128)';
                context.fillStyle = 'rgb(34,128,128)';
            }
            context.stroke();
            context.fill();
        }
    }
}

drawTriangle(225, 33);

/*
---TASK: 24---

---TASK: 23---
        function drawCheckeredPattern(row, col) {
            for (j = 0; j < row; j++) {
                var positionX = canvasWidth - canvasWidth;
                var positionY = canvasHeight - canvasHeight;
                for (i = 0; i < col; i++) {
                    if (j % 2 == 1) {
                        if (i % 2 == 1) {
                            context.fillStyle = 'black';
                        } else {
                            context.fillStyle = 'white';
                        }
                    }
                    if (j % 2 == 0) {
                        if (i % 2 == 1) {
                            context.fillStyle = 'white';
                        } else {
                            context.fillStyle = 'black';
                        }
                    }
                    context.fillRect(positionX + (canvasWidth / row) * i, positionY + canvasHeight / col * j, canvasWidth / row, canvasHeight / col);
                }
            }
        } drawCheckeredPattern(8, 8);

---TASK: 22---
var height = 98;
var width = 113;

function drawHexagon(positionX, positionY){
    context.beginPath();
    context.moveTo(positionX, positionY);
    context.lineTo(positionX+width/4, positionY-height/2);
    context.lineTo(positionX+(width/4)*3, positionY-height/2);
    context.lineTo(positionX+width, positionY);
    context.lineTo(positionX+(width/4)*3, positionY+height/2);
    context.lineTo(positionX+width/4, positionY+height/2);
    context.lineTo(positionX, positionY);
    context.strokeStyle = 'rgba(230, 126, 34, 1)';
    context.stroke();    context.strokeStyle = 'rgba(230, 126, 34, 1)';
    context.stroke();
}
drawHexagon(76, 120);
drawHexagon(76, 230);
drawHexagon(168.5, 65);
drawHexagon(168.5, 175);
drawHexagon(168.5, 285);
drawHexagon(261, 120);
drawHexagon(261, 230);
context.fillStyle = 'rgba(230, 126, 34, 1)';
context.fill();

---TASK: 21---
        function random(max, min) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        function lineToCenter(positionX, positionY, color){
            context.beginPath();
            context.moveTo(positionX,positionY);
            context.lineTo(canvasWidth/2,canvasHeight/2);
            context.strokeStyle = color
            context.stroke();
        }
        for(let i=0;i<1000;i++){
        lineToCenter(random(canvasWidth,canvasWidth-canvasWidth),random(canvasHeight,canvasHeight-canvasHeight),'teal');
        }

---TASK: 20---
        function star(positionX, positionY, size) {
            context.beginPath();
            context.moveTo(positionX, positionY);
            context.lineTo(positionX + size, positionY);
            context.lineTo(positionX + size * 0.15, positionY + size * 0.5);
            context.lineTo(positionX + size * 0.5, positionY - size * 0.4);
            context.lineTo(positionX + size * 0.85, positionY + size * 0.5);
            context.lineTo(positionX, positionY);
            context.strokeStyle = 'rgb(233,159,184)';
            context.stroke();
            context.fillStyle = 'rgb(233,159,184)';
            context.fill();
        }

        star(40, 50, 75);
        star(130, 120, 100);
        star(250, 220, 150);
       //context.lineTo(positionX+size/3,positionY);
       // context.lineTo(positionX + size/2, positionY-size*0.4);
       // context.lineTo(positionX+2*(size/3),positionY);
       // context.lineTo(positionX + size, positionY);
       // context.lineTo(positionX+(size/3)*2,positionY+size/5);
       // context.lineTo(positionX+size*0.85, positionY+size*0.5);
       // context.lineTo(positionX+size/2, positionY+size/4);
       // context.lineTo(positionX+size*0.15, positionY+size/2);
       // context.lineTo(positionX+size/3, positionY+size/5);
---TASK: 19---
function triangle(positionX, positionY, size){
    context.beginPath();
context.moveTo(positionX, positionY);
context.lineTo(positionX - size/2, positionY+size);
context.lineTo(positionX + size/2, positionY + size);
context.lineTo(positionX, positionY);
context.strokeStlye = 'rgba(0,0,0,.5)';
context.stroke();
context.fillStyle = 'rgba(255,165,0,.5)';
context.fill();
}triangle(230, 160, 50);
triangle(270, 100, 50);
triangle(200, 50, 150);

---TASK: 18---

var space = 1;

for(i=0; i<canvasWidth; i++){
    context.beginPath();
    context.moveTo((canvasWidth-canvasWidth)+i*space,(canvasHeight/2));
    if(i%4==0){
        context.lineTo((canvasWidth-canvasWidth),(canvasHeight-canvasHeight));
    }else if(i%4==1){
        context.lineTo(canvasWidth,(canvasHeight-canvasHeight));
    }else if(i%4==2){
        context.lineTo((canvasWidth-canvasWidth),canvasHeight);
    }else if(i%4==3){
        context.lineTo(canvasWidth,canvasHeight);
    }
    context.strokeStyle = "rgba(0,0,255,.5)";
    context.stroke();
}
---TASK: 17---

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




