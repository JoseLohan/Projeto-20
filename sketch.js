
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine
let world

var plane;
var square;
var rectangle;
var circle;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	var square_options = {
		restitution: 2,
		friction: 0.4,
		isStatic:false,
		frictionAir: 1.3
	}

	var rectangle_options = {
		restitution: 0.7,
		friction: 1.6,
		isStatic:false,
		frictionAir: 0.9
	}

	var circle_options = {
		restitution: 1.2,
		friction: 1.9,
		isStatic:false,
		frictionAir: 0.5
	}


	Engine.run(engine);

	var plane_options = {
		isStatic:true
	}
  
	plane = Bodies.rectangle(400,620,800,20,plane_options);
  	World.add(world,plane);

	square = Bodies.rectangle(400,250,60,60,square_options);
  	World.add(world,square);

	rectangle = Bodies.rectangle(600,250,160,80,rectangle_options);
  	World.add(world,rectangle);

	circle = Bodies.circle(200,250,50,circle_options);
  	World.add(world,circle);
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS); 
  background("orange");

  Engine.update(engine);

  fill("red");

  ellipse(circle.position.x,circle.position.y,50,50);
  rect(square.position.x,square.position.y,60,60);
  rect(rectangle.position.x,rectangle.position.y,160,80);

  rect(plane.position.x,plane.position.y,800,20);
}



