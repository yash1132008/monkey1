// Game States
var PLAY=1;
var END=0;
var gameState=1;

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var ground,invisibleGround;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  
  
 
  
  
  //creating a monkey
  monkey=createSprite(50,315);
  monkey.addAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  monkey.scale=0.1;
  
  
  
  //creating a ground
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);

  
  invisibleGround = createSprite(400,350,900,10);
  invisibleGround.visible = false;
  
  
  
  
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
}


  

  score = 0;

function draw() {
  background(250);
  textSize(20);
  text("Score: "+ score, 50,50);
   
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  
  
  if(gameState === PLAY){
    
    
   
  
      score = score + Math.round(getFrameRate()/60);
    
    if(score>0 && score%100 === 0){
 
    }
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    
    //creating functions for banana and obstacle
    bananas();
    stones();
    
    
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
    bananaGroup.add(banana);
    
  }
    
    if(  bananaGroup.isTouching(monkey)){
        bananaGroup.destroy();
    }
    
  if(keyDown("space")&& monkey.y >= 100) {
    monkey.velocityY = -15;
  }
  monkey.velocityY = monkey.velocityY + 0.8
    
    if(obstacleGroup.isTouching(monkey)){
      gameState=END;
     
       bananaGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
      
     
      
      
    }
    
  }
  
  
  if(gameState === END){
    
    
  }
  
 monkey.collide(invisibleGround);
  
  drawSprites();
}


function bananas(){
  
  if(World.frameCount%100===0){
      
  banana=createSprite(400,200,20,20);
    banana.scale=0.1;
  
    //fruit.debug=true;
    r=Math.round(random(1));
    if(r==1){
      banana.addImage(bananaImage);
    }
    
  banana.y=Math.round(random(50,240));
    
    banana.velocityX=-5;
    banana.setLifetime=100;
    bananaGroup.add(banana);
  }
}

function stones(){
   
  if(World.frameCount%100===0){
      
  obstacle=createSprite(600,315,10,40);
    obstacle.scale=0.2;
  
    //fruit.debug=true;
    r=Math.round(random(1));
    if(r==1){
     obstacle.addImage(obstacleImage);
    }
    //leveling the depth  
  obstacle.depth = monkey.depth;
   monkey.depth = monkey.depth + 1;
obstacle.velocityX=-5;
    obstacle.setLifetime=100;
   obstacleGroup.add(obstacle);
  }
}




