var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect2 = createSprite(600, 200, 50, 80);

  //velocity
  fixedRect.velocityY=-4;
  fixedRect2.velocityY=4;



}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(fixedRect2,movingRect)){
    movingRect.shapeColor = "red";
  fixedRect2.shapeColor = "red";
  }else {
    movingRect.shapeColor = "green";
    fixedRect2.shapeColor = "green";
  }
  

  bounceOff(fixedRect2,fixedRect);
  drawSprites();
}

