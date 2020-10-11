var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
var survivalTime=0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);

  monkey = createSprite(80, 315, 20,  20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  bananaGroup = new Group();
}


function draw() {
  createCanvas(400, 400);
  background('white');
  
  
  if(keyDown("space")){
    monkey.velocityY = -7;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  
  monkey.collide(ground);
 
  food();
  
  textSize(20);
  survivalTime=Math.round(frameCount/60)
  text("Survival Time:" + survivalTime, 100, 50);
  
  obstacles();
  
  
  
  drawSprites();
}

function food(){
  if(frameCount%80===0){
    banana = createSprite(200, 200);
    banana.y=Math.round(random(120, 200))
    banana.addAnimation(monkey_running);
    banana.velocityX = -3;
    banana.lifetime = 150;
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    bananaGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount%100===0){
    obstacle = createSprite(200, 350);
    obstacle.collide(ground);
    obstacle.velocityX = -3;
    obstacle.lifetime = 100;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    
  }
  
  
}
