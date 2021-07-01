var PLAY = 1;
var END = 0;
var gameState = PLAY;
var food,foodCollectSound;
var fox, fox_running, fox_collided;
var ground, invisibleGround, groundImage;

var cactusGroup,cactus1,cactus2,cactus3;

var score;
var gameOverImg,restartImg
var jumpSound , checkPointSound, dieSound

var eagle, eagle_flying;
var bg;
function preload(){
  fox_running = loadAnimation("fox images/fox2.png","fox images/selected 1.png")
  fox_collided = loadAnimation("fox images/death.png");
  food=loadImage("Chicken.png");
  eagle_flying=loadAnimation("eagle img/eagle1.png","eagle img/eagle2.png","eagle img/eagle3.png");

  groundImage = loadImage("ground2.png");
  foodCollectSound=loadSound("coincollect.wav")
 cactus1=loadImage("Cactus/Cactus1.png")
 cactus2=loadImage("Cactus/Cactus2.png")
 cactus3=loadImage("Cactus/Cactus3.png")
  bg=loadImage("background.jfif")
  jumpSound = loadSound("jump.mp3")
  dieSound = loadSound("die.mp3")
  checkPointSound = loadSound("checkPoint.mp3")
}

function setup() {
  createCanvas(600, 200);

  
  
  fox = createSprite(50,160,20,50);
  fox.addAnimation("running", fox_running);
  fox.addAnimation("collided", fox_collided);
  

  fox.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  
 cactusGroup=new Group();
 
  
  
  
 
 
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  
}

function draw() {
  
  background(bg);
  spawnObstacles();
  spawnEagle();
  spawnFood();
  drawSprites();
}

function spawnEagle(){
  if(frameCount%700===0){
    eagle=createSprite(600,50,35,90);
    eagle.addAnimation("flying", eagle_flying);
    eagle.scale=0.2;
    eagle.velocityX=-4;
  }
}
function spawnFood(){
if(frameCount%250===0){
var coin1=createSprite(600,100,10,10);
coin1.addImage(food);
coin1.scale=0.1;
coin1.velocityX=-4;



}



}

function spawnObstacles(){
var rand=Math.round(random(1,3));
if(frameCount%300===0){
cactus=createSprite(600,150,10,10);
cactus.velocityX=-4
cactus.scale=0.5;
switch(rand){
  case 1: cactus.addImage(cactus1)
  break;
  case 2: cactus.addImage(cactus2)
  break;
  case 3: cactus.addImage(cactus3)
  break;

}
cactusGroup.add(cactus);
}
}