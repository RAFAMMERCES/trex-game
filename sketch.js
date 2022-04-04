var floormg
var trex ;
var trex_running;
var floor;
var chaoinvisivel;

function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png")
floormg = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //crie um sprite de trex
  
trex = createSprite(50,180,50,50);
trex.addAnimation("trex correndo",trex_running);
trex.scale = 0.5;

floor = createSprite(300,190,600,15);
floor.addImage(floormg)
floor.velocityX = -5

chaoinvisivel = createSprite(300,198,600,10);
chaoinvisivel.visible = false;
}

function draw(){
  background("skyblue")
  console.log(trex.y)
  if(keyDown("space")&&trex.y >159){
trex.velocityY = -10;
  }

trex.velocityY = trex.velocityY +0.8 
if(floor.x <0){
floor.x = floor.width/2;



}

trex.collide(chaoinvisivel)
  drawSprites();
}
