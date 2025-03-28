let r = 0; 
let rSpeed= 0.05
function setup() {
  createCanvas(windowWidth, windowHeight);
ellipseMode (CENTER)
}

function draw() {
  background(220);
  push()
  translate (width/2, height/2)
  rotate(r)
  fill(100,230,50)
ellipse (0,30,140)
  line(0,0,250,0)
  translate (250, 0)
  rotate(-2*r)
ellipse (0,30,140)
  line(0,0,250,0)
  translate (250, 0)
  rotate(r)
 ellipse (0,30,140)
 pop()
  

  
  r= r + rSpeed

}

function mousePressed(){
 

  if (rSpeed==0){
    rSpeed=0.05
    
       }
  else {
    rSpeed=0
  }
}