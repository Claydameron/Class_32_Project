const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var object, objectImg;
var bg = "Day.png";
var backgroundImg;
var score = 0;

function preload() {
objectImg = loadImage("Image.png");

getbackgroundImg();
}

function setup() {
  createCanvas(900,500);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  
  object = Bodies.circle(50,250,20);
  World.add(world,object);

  ground1 = new Ground(350,455,175,15);
  boxB11 = new BoxB(350,425,35,35);
  boxB12 = new BoxB(315,425,35,35);
  boxB13 = new BoxB(385,425,35,35);
  boxB14 = new BoxB(280,425,35,35);
  boxB15 = new BoxB(420,425,35,35);
  boxO11 = new BoxO(350,390,35,35);
  boxO12 = new BoxO(315,390,35,35);
  boxO13 = new BoxO(385,390,35,35);
  boxY11 = new BoxY(350,355,35,35);

  ground2 = new Ground(750,255,175,15);
  boxB21 = new BoxB(750,225,35,35);
  boxB22 = new BoxB(715,225,35,35);
  boxB23 = new BoxB(785,225,35,35);
  boxB24 = new BoxB(680,225,35,35);
  boxB25 = new BoxB(820,225,35,35);
  boxO21 = new BoxO(750,190,35,35);
  boxO22 = new BoxO(715,190,35,35);
  boxO23 = new BoxO(785,190,35,35);
  boxY21 = new BoxY(750,155,35,35);

  sling = new Slingshot(object,{x:100,y:150});

  Engine.run(engine);
}

function draw() {

  if (backgroundImg) {
  background(backgroundImg);  
}
  drawSprites();

  imageMode(CENTER);
  image(objectImg ,object.position.x,object.position.y,40,40)

  ground1.display();
  boxB11.display();
  boxB12.display();
  boxB13.display();
  boxB14.display();
  boxB15.display();
  boxO11.display();
  boxO12.display();
  boxO13.display();
  boxY11.display();

  ground2.display();
  boxB21.display();
  boxB22.display();
  boxB23.display();
  boxB24.display();
  boxB25.display();
  boxO21.display();
  boxO22.display();
  boxO23.display();
  boxY21.display();

  boxB11.playerScore();
  boxB12.playerScore();
  boxB13.playerScore();
  boxB14.playerScore();
  boxB15.playerScore();
  boxO11.playerScore();
  boxO12.playerScore();
  boxO13.playerScore();
  boxY11.playerScore();

  boxB21.playerScore();
  boxB22.playerScore();
  boxB23.playerScore();
  boxB24.playerScore();
  boxB25.playerScore();
  boxO21.playerScore();
  boxO22.playerScore();
  boxO23.playerScore();
  boxY21.playerScore();

  
  sling.display();


  fill("white");
  text("Score = " + score,40,20);

}

function mouseDragged(){
  Matter.Body.setPosition(object,{x:mouseX,y:mouseY})
}

function mouseReleased() {
  sling.fly();
}

function keyPressed(){
   if (keyCode === 32) { 
     sling.reload(object);
     } 
    }

    async function getbackgroundImg() {
      var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
      var responseJson = await response.json();
      var dateTime = responseJson.datetime;
      var hour = dateTime.slice(17,19);
      console.log(hour);
  
      if(hour >= 06 && hour <= 18) {
          bg = "Day.png";
      } else {
          bg = "Night.png";
      }
  
      backgroundImg = loadImage(bg);
  }