const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var myEngine, myWorld;
var box1, box2, ground;
function setup() {
  createCanvas(600,600);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  box1 = new Box(300,150,50,50);
  box2 = new Box(320,50,50,100);

  ground = new Ground(300,590,width,20);
}

function draw() {
  background(0);  
  
  Engine.update(myEngine);

  box1.display();
  box2.display();
  ground.display();
}