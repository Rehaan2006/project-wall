var bullet,wall;
var speed,weight;
var thickness;

function setup() {
  createCanvas(1600,400);
 
  speed=Math.round(random(223,321));
  thickness=Math.round(random(22,83)); 
  weight=Math.round(random(30,52));
  bullet =createSprite(50,200,50,50);
  bullet.shapeColor="white"
  bullet.velocityX=speed;
  wall=createSprite(1200,200,thickness,height/2);  
}

function draw() {
  background(0);
 if (wall.x-bullet.x<(bullet.width+wall.width)/2){
   bullet.velocityX=0;

   var deformation=0.5*weight*speed*speed/(thickness*thickness*thickness);
   if (deformation>12.43){
     wall.shapeColor="red";
   }
  if(deformation<12.43&&deformation>3){
    wall.shapeColor="yellow";
  }
   
   if (deformation<3){
     wall.shapeColor="green";
   }
  }
  drawSprites();
  }
  
 