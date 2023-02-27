// STEPS
// STEP 1: Create a blueprint for gift and create mulitple gifts using it
// STEP 2: Create a blueprint for stars and create multiple stars using it


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world

function preload(){
  bgImg = loadImage("assets/bg.jpeg")
}

function setup() {
  createCanvas(1000,600);
  
  engine = Engine.create();
  world = engine.world;
  
  tree = createImg("assets/tree.png");
  tree.position(150,-20)
  tree.size(700,500)

}


function draw() {
  background(bgImg);
  Engine.update(engine);

}

