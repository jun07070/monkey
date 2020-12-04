
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,300)
  
  monkey=createSprite(80,260,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1
  ground=createSprite(300,280,1200,20);
  ground.x=ground.width/2
  ground.velocityX=-3
  
  FoodGroup=new Group()
  obstacleGroup=new Group()
  
  
  
  score=0
  
}


function draw() {
background("lightblue");
monkey.collide(ground)
if(ground.x<0){
   ground.x=ground.width/2
}
 if(keyDown("space")&& monkey.y >= 170) {
        monkey.velocityY = -12;
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
    text("Score: "+ score, 500,50);
score = score + Math.round(getFrameRate()/60);

  spawnFood();
  spawnobstacles();
  drawSprites();
}

function spawnFood() {
  //write code here to spawn the Foods
  if (frameCount % 60 === 0) {
    var Food = createSprite(600,120,40,10);
    Food.y = Math.round(random(80,160));
    Food.addImage(bananaImage);
    Food.scale = 0.1;
    Food.velocityX = -3;
    
     //assign lifetime to the variable
    Food.lifetime = 200;
    
    //adjust the depth
    Food.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each Food to the group
    FoodGroup.add(Food);
  }
}
function spawnobstacles() {
  //write code here to spawn the obstacles
  if (frameCount % 60 === 0) {
   obstacle = createSprite(600,250,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -6;
    
     //assign lifetime to the variable
    obstacle.lifetime = 100;
    
    //adjust the depth

    
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
  }
}



