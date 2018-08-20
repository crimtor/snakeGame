window.onload=function() {
    canv=document.getElementById("gc");
    ctx=canv.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game,1000/15);
}

let snakeX=15;
let snakeY=10;
let gridWidth=30;
let gridHeight=20;
let tileWidth=20;
let tileHeight=20;
let appleX=20;
let appleY=15;
let snakeXVelocity=0;
let snakeYVelocity=0;
let tailLength=[];
let tailSize = 3;
let direction = '';

const snake = new Image();
snake.src = "images/snake.png";

const apple = new Image();
apple.src = "images/apple.png";

function game() {
    snakeX+=snakeXVelocity;
    snakeY+=snakeYVelocity;
    if(snakeX<0) {
        snakeX= gridWidth-1;
    }
    if(snakeX>gridWidth-1) {
        snakeX= 0;
    }
    if(snakeY<0) {
        snakeY= gridHeight-1;
    }
    if(snakeY>gridHeight-1) {
        snakeY= 0;
    }
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canv.width,canv.height);

    ctx.fillStyle="lime";
    for(let i=0;i<tailLength.length;i++) {
        ctx.fillRect(tailLength[i].x*tileWidth,tailLength[i].y*tileHeight,tileWidth-2,tileHeight-2);
        if(tailLength[i].x==snakeX && tailLength[i].y==snakeY) {
          tail = 3;
        }
    }
    tailLength.push({x:snakeX,y:snakeY});
    while(tailLength.length>tail) {
    tailLength.shift();
    }

    if(appleX==snakeX && appleY==snakeY) {
        tail++;
        eat.play();
        appleX=Math.floor(Math.random()*gridWidth);
        appleY=Math.floor(Math.random()*gridHeight);
    }
    ctx.fillStyle="red";
    ctx.drawImage(apple, appleX*tileWidth, appleY*tileHeight);
}

function keyPush(evt) {
    switch(evt.keyCode) {
        case 37:
            if(direction != "RIGHT"){
            snakeXVelocity=-1;snakeYVelocity=0;
            direction = "LEFT";
            }
            break;
        case 38:
          if(direction != "DOWN"){
            snakeXVelocity=0;snakeYVelocity=-1;
            direction = "UP";
          }
            break;
        case 39:
          if(direction != "LEFT"){
            snakeXVelocity=1;snakeYVelocity=0;
            direction = "RIGHT";
          }
            break;
        case 40:
          if(direction != "UP"){
            snakeXVelocity=0;snakeYVelocity=1;
            direction = "DOWN";
          }
            break;
    }
}

// load audio files

let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let right = new Audio();
let left = new Audio();
let down = new Audio();

dead.src = "audio/dead.mp3";
eat.src = "audio/eat.mp3";
up.src = "audio/changedirection.mp3";
right.src = "audio/changedirection.mp3";
left.src = "audio/changedirection.mp3";
down.src = "audio/changedirection.mp3";
