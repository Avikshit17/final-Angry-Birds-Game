const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var engine,world,box3,box4,bird;
var ground,ball,stick1,stick2,stick3,stick4;
var box1,box2,pig,pig2,pig3;
var backgroundImage,connection,platform;
var gameState="onSling"
function preload(){
changeBackground()
}
function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;
  box1=new Box(1050,350)
  console.log(box1);
  box2=new Box(900,350)
  ground=new Ground(600,380,1200,20)
  pig=new Pig(980,350)
  stick1=new Stick(970,300,200,PI/2)
  box3=new Box(900,250)
  box4=new Box(1050,250)
  pig2=new Pig(980,250)
  stick2=new Stick(970,230,200,PI/2)
  pig3=new Pig(980,190)
  stick3=new Stick(930,150,100,PI/6)
  stick4=new Stick(1010,150,100,-PI/6)
  bird=new Bird(100,70)
  //stick5=new Stick(200,150,100,PI/2)
  connection=new Connection(bird,{x:100,y:70})
  platform=new Ground(50,280,200,200)
}

function draw() {
  if(backgroundImage)
  background(backgroundImage); 
  else
  {
    backgroundImage=loadImage("sprites/bg2.jpg")
    background(backgroundImage)
  }
  Engine.update(engine)
  
  box1.display()
  box2.display()
  ground.display()
  pig.display()
  stick1.display()
  box3.display()
  box4.display()
  pig2.display()
  stick2.display()
  pig3.display()
  stick3.display()
  stick4.display()
  bird.display()
 // stick5.display()
  connection.display()
  platform.display()
}
function mouseDragged()
{
  if(gameState=="onSling"){
 Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
  }
}
function mouseReleased()
{
  console.log("hi")
  connection.fly()
  gameState="launched"
}
function keyPressed()
{
  if(keyCode==32){
    Matter.Body.setPosition(bird.body,{x:100,y:70})
    connection.join(bird)
    Matter.Body.setAngle(bird.body,0)
    gameState="onSling"
  }
}
async function changeBackground()
{
var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
var data=await response.json()
var time=data.datetime

var hour=time.slice(11,13)
console.log(hour)
if(hour>=6 && hour<=16)
{
  backgroundImage=loadImage("sprites/bg.png")
}
else
{
  backgroundImage=loadImage("sprites/bg2.jpg")
}

}