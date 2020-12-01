const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var engine, world;


function setup() {
  createCanvas(windowWidth / 2 , windowHeight /1.5);
  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
   };
   mConstraint = MouseConstraint.create(engine, options );
  World.add(world,mConstraint);
  

  pend1 = new Pendulum (200,600)

}

function draw() {
  background(255,255,255);  


}

function mouseDragged(){
  Matter.Body.setPosition(pendulum.body,{ x:mouseX, y: mouseY});
}