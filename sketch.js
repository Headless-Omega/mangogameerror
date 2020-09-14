
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boyImg, boy;
var mango1, mango2, mango3, mango4, mango5, mango6;
var stone, ground, tree

function preload()
{
	boyImg=loadImage("pics/boy.png")
}

function setup() {
	createCanvas(800, 700);
	boy=createSprite(200,500,50,50);
	boy.addImage(boyImg);
	boy.scale=0.1;
	engine = Engine.create();
	world = engine.world;
	tree= new Tree(600,700)

	//Create the Bodies Here.

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  tree.display();
  drawSprites();
 
}	