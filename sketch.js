const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20)
    box1 = new Box(1000,550,70,70);
    box2 = new Box(800,550,70,70);
    pig1=new Pig(900,570)
    log1=new log(900,500,300,PI/2)
    bird=new Bird(100,100)
    box3 = new Box(1000,450,70,70);
    box4 = new Box(800,450,70,70);
    pig2=new Pig(900,470)
    log2=new log(900,400,300,PI/2)
    box5 = new Box(900,350,70,70);
    log3=new log(860,300,150,PI/7)
    log4=new log(940,300,150,-PI/7)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    bird.display();
    pig1.display();
    log1.display();
    ground.display();
    box3.display();
    box4.display();
    box5.display();
    pig2.display();
    log2.display();
    log3.display();
    log4.display();
}