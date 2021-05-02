var car, wall;
var speed,weight;

function setup() {
  createCanvas(1000,400);
  car = createSprite(30, 200, 40,40);
  car.shapeColor="white";
  wall = createSprite(950,200,30,100);
  speed = random(55,90);
  weight = random(400,1500);
  car.velocityX = speed
}

function draw() {
  background(0);  
  if(wall.x-car.x < car.width/2 + wall.width/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;
    if(deformation > 180){
      car.shapeColor = color(255,0,0);
    }
    if(deformation < 180 && deformation > 100){
      car.shapeColor = color(230,230,0);
    }
    if(deformation < 100){
      car.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}