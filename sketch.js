var helicopterIMG, packageIMG , ground,target1 , target2,target3
/*var target;*/
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
helicopterIMG = loadImage("helicopter.png");
packageIMG = loadImage("package.png");
}

function setup(){
    createCanvas(1200,800)
    rectMode(CENTER);
 
    package = createSprite(530,235,25,15);
    package.addImage(packageIMG);
    package.scale = 0.2;

    helicopter = createSprite(500,200,25,15);
    helicopter.addImage(helicopterIMG);
    helicopter.scale = 1;

    ground = createSprite(500,675,800,15,ground_options);
    ground.shapeColor = "white";
    ground.scale = 2;

    target1 = createSprite(500,655,150,15);
    target1.shapeColor = "white";
    target1.scale = 1;
    target2 = createSprite(419,625,15,100);
    target2.shapeColor = "white";
    target2.scale = 1;
    target3 = createSprite(580,625,15,100);
    target3.shapeColor = "white";
    target3.scale = 1;

   

   
    

    /*target = createSprite(550,600,50,7);
    target.shapeColor = "white";
    target.scale = 2;*/

    engine=Engine.create();

    world = engine.world;

    var package_options = {
        restitution : 0,
        isStatic:true 
        }

    packageBody = Bodies.circle(530,235,10,package_options)
    World.add(world,packageBody)

    var ground_options = {
        isStatic:true
          
    }

    groundBody = Bodies.rectangle(500,650,800,10,ground_options)
    World.add(world,groundBody);

    Engine.run(engine);
   
    }

    function draw(){
        rectMode(CENTER)
        background("black")

        package.x = packageBody.position.x;
        package.y = packageBody.position.y;
          
        
        if(package.x<= 550 && package.y>= 645){
            fill("white");
            textSize(100);
            text("YOU WIN", 500,400);
        }
        if(package.isTouching(target1)){
            fill("white");
            textSize(100);
            text("YOU WIN", 500,400);
           // package.visible = false
        }
    
        camera.x = package.x + 5;
        camera.y = package.y +5;
    

        
        
        
        drawSprites();     
        fill("white");
        textSize(25);

        text("press down arrow to throw the package down,up arrow to play again", 100,730)
    }

   function keyPressed(){
        if(keyCode === DOWN_ARROW){
            Matter.Body.setStatic(packageBody,false);
            package.velocityY =-3;
            }
            if(keyCode === UP_ARROW){
                package.visible = false;
                package = createSprite(530,235,25,15);
    package.addImage(packageIMG);
    package.scale = 0.2;

    helicopter = createSprite(500,200,25,15);
    helicopter.addImage(helicopterIMG);
    helicopter.scale = 1;

    ground = createSprite(500,675,800,15,ground_options);
    ground.shapeColor = "white";
    ground.scale = 2;

    target1 = createSprite(500,655,150,15);
    target1.shapeColor = "white";
    target1.scale = 1;
    target2 = createSprite(419,625,15,100);
    target2.shapeColor = "white";
    target2.scale = 1;
    target3 = createSprite(580,625,15,100);
    target3.shapeColor = "white";
    target3.scale = 1;

    var package_options = {
        restitution : 0,
        isStatic:true 
        }

    packageBody = Bodies.circle(530,235,10,package_options)
    World.add(world,packageBody)

    var ground_options = {
        isStatic:true
          
    }

    groundBody = Bodies.rectangle(500,650,800,10,ground_options)
    World.add(world,groundBody);

    package.x = packageBody.position.x;
        package.y = packageBody.position.y;
          
        
        if(package.x<= 550 && package.y>= 645){
            fill("white");
            textSize(100);
            text("YOU WIN", 500,400);
        }
        if(package.isTouching(target1)){
            fill("white");
            textSize(100);
            text("YOU WIN", 500,400);
        }
        

            }
            

    }

    function isTouching(Object1, Object2){
        if (Object1.x - Object2.x < Object2.width/2 + Object1.width/2
          && Object2.x - Object1.x < Object2.width/2 + Object1.width/2
          &&Object1.y - Object2.y < Object2.height/2 + Object1.height/2
          && Object2.y - Object1.y < Object2.height/2 + Object1.height/2) {
          
        
      return true;
        
      }
      else return false;
      }
      

    
        
        
