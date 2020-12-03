const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box,box1,ground
var pig,pig2
var log

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    
    box=new Box(200,300,50,50)
    box1=new Box(240,100,50,100)

    ground=new Ground()

    pig=new Pig(100,100)

    log=new Log(200,100,100,PI/2)

}

function draw(){
    background(0);
    Engine.update(engine);
    box.display()
    box1.display()
    ground.display()
    pig.display()
    log.display()
}