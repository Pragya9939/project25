
const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Body   = Matter.Body;
const Render = Matter.Render;
var dustbinObj, PaperObject,groundObject	
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	PaperObject=new Paper(200,450,70);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	
	
	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 800,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	Render.run(render);
  }

function draw() {
  rectMode(CENTER);
  background("lightyellow");
  
  PaperObject.display();
  groundObject.display();
  dustbinObj.display();
}

function keyPressed() {
  	if (keyCode === UP_ARROW)
	   {
    	Matter.Body.applyForce(PaperObject.body,PaperObject.body.position,{x:130,y:-145});
       }
}





