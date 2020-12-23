const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var umbrella
var engine,world

var thunder1,thunder2,thunder3,thunder4
var maxDrops = 100
var drop = []




function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
}

function setup(){
    createCanvas(500, 700);

	engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(250,550);
    
    if(frameCount%100 === 0) {
        for(var i = 0; i < maxDrops; i++) {
          
            drop.push(new Drops(random(0,500),random(0,500),5));
        }
    }
    
    Engine.run(engine);
    
}

function draw(){
    background(0)
    Engine.update(engine);


    //thunder effect
    rand = Math.round(random(1,4))

    if(frameCount%30 === 0) {
        thunder = createSprite(10,10,10,10)
        thunder.x = random(50,450);
        thunder.y = random(10,30);
        thunder.lifetime = 10
        thunder.scale = random(0.3,0.75)

        switch(rand) {
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;

            default: break;
        }
    }



    drawSprites();
    umbrella.display();

    for(var i = 0; i < maxDrops; i++) {
        drop[i].show();
        drop[i].update();
        
    }

}   


