let x = 40;
let y = 40;

let xSpeed = 5;
let ySpeed = 4;

function setup() {
  createCanvas(windowWidth, windowHeight);
 // background(0,200,255);
  rectMode(CENTER);
  
  //frameRate(2);
  
}

function draw() {
  
  

 // noStroke();
  //background(0,200,255,50)
  
  strokeWeight(random(6));
  
  stroke(255,0,0)
  fill(155-random(20),100-random(20),-random(20));
  
   fill(155,205,200);
  
  
  //rect(200,200,50,50)
  // let randomFactor = random(0,width);
  
  let randomFactor = random(-10,10);
  
  //rect(randomFactor,height/2,80);
  
  //rect(x+random(-10,10),y+random(-10,10),80+random(-10,10));
  rect(x,y,80,120);
  
  
  
  x += xSpeed;
  y += ySpeed;
  
  
  //noStroke()
  //text("x location: " + x, 25,25);
  //text("y location: " + y, 25,40);
  
  // print(x)
  
  if(x > width -40){
    xSpeed =- xSpeed;   
  }
  
  if(x <= 40){
    xSpeed =- xSpeed;   
  }
  if(y> height-40){
    ySpeed = - ySpeed;
  }
  if(y< 40){
    ySpeed = - ySpeed
  }
  
  
  
 // y += 10;
  
  //print(x);
  
//   if(x > 600 +100){
//     x = -100;
//   }
  
//   if(y> 400 + 100){
//     y=-100;
//   }
  
}

function mousePressed(){
  background(0)
  xSpeed = random(1,5);
  ySpeed = random(1,5);
}
