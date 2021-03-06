
var fixedRect, movingRect;
var car,wall;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  car = createSprite(50,100,50,50);
  car.shapeColor = "blue";
  car.velocityX = 4;

  wall =  createSprite(1000,120,30,100);
  wall.shapeColor = "brown";
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(car, wall)){
    car.shapeColor = "red";
    car.velocityX = 0;
    textSize(20);
    text("Slow Down!!", 300,300);
  }
 


  drawSprites();
}

function isTouching(object1, object2){
  if (object2.x - object1.x < object1.width/2 + object2.width/2
    && object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.y - object1.y < object1.height/2 + object2.height/2
    && object1.y - object2.y < object1.height/2 + object2.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}


