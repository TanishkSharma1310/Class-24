const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var g1, b1,b2;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

   g1 = new Ground(600,height,1200,20);

   b1 = new Box(700,320,70,70);
   b2 = new Box(920,320,70,70);
   p1 = new Pig(810,340);
   l1 = new log(810,260,300,PI/2);

   b3 = new Box(700,240,70,70);
   b4 = new Box(920,240,70,70);
   p3 = new Pig(810,220);
   l3 = new log(810,180,300,PI/2);

   b5 = new Box(810,160,70,70);
   l5 = new log(760,120,150,PI/7);
   l6 = new log(870,120,150,-PI/7);

   Bird = new bird(100,100)
    console.log(g1);
}

function draw(){
    background(0);
    Engine.update(engine);
   g1.display();

   b1.display();
   b2.display();
   p1.display();
   l1.display();
   
   b3.display();
   b4.display();
   p3.display();
   l3.display();

   b5.display();
   l5.display();
   l6.display();

   Bird.display();

}