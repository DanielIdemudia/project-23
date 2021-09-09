const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerbase1, Playerbase1, player

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  computerbase1 = new Computerbase(windowWidth-100, windowHeight-100, 180, 150)
  playerbase1 = new Computerbase(100, windowHeight-100, 180, 150)
  player = new Player(playerbase1.body.position.x, playerbase1.body.position.y - 153, 50, 180);
 
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   computerbase1.display()
   playerbase1.display()
   player.display()
   //display Player and computerplayer


}
