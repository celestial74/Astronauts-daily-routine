var astronaut,astroBath,astroEat,astro,astroSleep,astroExercise,astroRe;
var spaceStation,iss;

let hscale;
let wscale;

var state="sleep";

function preload() {
  iss=loadImage("images/iss.png");
  astro=loadAnimation("images/move1.png","images/move2.png");
  astroSleep=loadAnimation("images/sleep.png");
  astroEat=loadAnimation("images/eat1.png","images/eat2.png",);
  astroDrink=loadAnimation("images/drink1.png","images/drink2.png");
  astroExec=loadAnimation("images/gym1.png","images/gym2.png","images/gym1.png","images/gym2.png","images/gym1.png","images/gym2.png","images/gym1.png","images/gym2.png","images/gym1.png","images/gym2.png","images/gym1.png","images/gym2.png","images/gym12.png","images/gym11.png","images/gym12.png","images/gym11.png","images/gym12.png","images/gym11.png","images/gym12.png","images/gym11.png","images/gym12.png","images/gym11.png");
  astroBath=loadAnimation("images/bath1.png","images/bath2.png");
  astroRe=loadAnimation("images/research1.png","images/research2.png","images/research3.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  spaceStation=createSprite(width/2,height/2,width,height);
  spaceStation.addAnimation("iss",iss);

  astronaut=createSprite(width/2,height/2,40,04);
  astronaut.addAnimation("sleep",astroSleep);
  astronaut.addAnimation("astro",astro);
  astronaut.addAnimation("eat",astroEat);
  astronaut.addAnimation("exer",astroExec);
  astronaut.addAnimation("drink",astroDrink);
  astronaut.addAnimation("bath",astroBath);
  astronaut.addAnimation("re",astroRe);

  if(width<height) {
    spaceStation.scale=0.0002*width;
    astronaut.scale=0.0001*width;
    hscale=0.0002*height;
  }
  if(width>=height) {
    spaceStation.scale=0.0004*height;
    astronaut.scale=0.0002*height;
    wscale=0.0004*height;
  }
}

function draw() {
  background(255,255,255);  
  drawSprites();

  fill("white");
  stroke("black");
  strokeWeight(4);
  textSize(20);

  if(state=="sleep") {
    text("Press 'w' to wake the astronaut up",50,50);
    astronaut.changeAnimation("sleep");

    if(keyWentDown("w"||"W")) {
      state="hover";
    }
  }
  if(state=="hover") {
    astronaut.changeAnimation("astro");

    text("Press 'f' to feed the astronaut",50,50);
    text("Press 'e' to make the astronaut exercise",50,100);
    text("Press 'r' to make the astronaut research",50,150);
    text("Press 'b' to bathe the astronaut",50,200);
    text("Press 's' to make the astronaut sleep",50,250);

    if(keyWentDown("f")) {
      state="eat";
    }
    if(keyWentDown("e")) {
      state="exercise";
    }
    if(keyWentDown("r")) {
      state="research";
    }
    if(keyWentDown("b")) {
      state="bath";
    }
    if(keyWentDown("s")) {
      state="sleep";
    }
  }
  if(state=="eat") {

    astronaut.changeAnimation("eat");

    text("Press 'f' to feed the astronaut",50,50);
    text("Press 'e' to make the astronaut exercise",50,100);
    text("Press 'r' to make the astronaut research",50,150);
    text("Press 'b' to bathe the astronaut",50,200);
    text("Press 's' to make the astronaut sleep",50,250);

    if(keyWentDown("f")) {
      state="eat";
    }
    if(keyWentDown("e")) {
      state="exercise";
    }
    if(keyWentDown("r")) {
      state="research";
    }
    if(keyWentDown("b")) {
      state="bath";
    }
    if(keyWentDown("s")) {
      state="sleep";
    }
  }
  if(state=="exercise") {
    astronaut.changeAnimation("exer");

    text("Press 'f' to feed the astronaut",50,50);
    text("Press 'e' to make the astronaut exercise",50,100);
    text("Press 'r' to make the astronaut research",50,150);
    text("Press 'b' to bathe the astronaut",50,200);
    text("Press 's' to make the astronaut sleep",50,250);

    if(keyWentDown("f")) {
      state="eat";
    }
    if(keyWentDown("e")) {
      state="exercise";
    }
    if(keyWentDown("r")) {
      state="research";
    }
    if(keyWentDown("b")) {
      state="bath";
    }
    if(keyWentDown("s")) {
      state="sleep";
    }
  }
  if(state=="bath") {
    astronaut.changeAnimation("bath");

    text("Press 'f' to feed the astronaut",50,50);
    text("Press 'e' to make the astronaut exercise",50,100);
    text("Press 'r' to make the astronaut research",50,150);
    text("Press 'b' to bathe the astronaut",50,200);
    text("Press 's' to make the astronaut sleep",50,250);

    if(keyWentDown("f")) {
      state="eat";
    }
    if(keyWentDown("e")) {
      state="exercise";
    }
    if(keyWentDown("r")) {
      state="research";
    }
    if(keyWentDown("b")) {
      state="bath";
    }
    if(keyWentDown("s")) {
      state="sleep";
    }
  }
  if(state=="research") {
    astronaut.changeAnimation("re");

    text("Press 'f' to feed the astronaut",50,50);
    text("Press 'e' to make the astronaut exercise",50,100);
    text("Press 'r' to make the astronaut research",50,150);
    text("Press 'b' to bathe the astronaut",50,200);
    text("Press 's' to make the astronaut sleep",50,250);

    if(keyWentDown("f")) {
      state="eat";
    }
    if(keyWentDown("e")) {
      state="exercise";
    }
    if(keyWentDown("r")) {
      state="research";
    }
    if(keyWentDown("b")) {
      state="bath";
    }
    if(keyWentDown("s")) {
      state="sleep";
    }
  }
}