
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine 
let world 

var ball; 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options = 
	{
		isStatic: false,
		restitution: 0.7, 
		friction: 0, 
		density: 1.2
	}

	

	ball = Bodies.circle(80, 10, 10, ball_options);
	World.add(world, ball)

	ellipseMode(RADIUS)

	//Create the Bodies Here.

	groundobj = new Ground(width/2, 700, 800, 20);

	leftSide = new Ground(600, 650, 20, 120);

	rightSide = new Ground(700, 650, 20, 120);



	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  rightSide.show();
  leftSide.show();
  groundobj.show(); 
  ellipse(ball.position.x, ball.position.y, 10, 10);
  
  keypressed();
  drawSprites();
 
}

function keypressed()
{
	if (keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.09, y:0.1}); 

	}
}

