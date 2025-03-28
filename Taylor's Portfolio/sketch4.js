let amt = 1;
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke()
}

function draw() {
  background(0,10);
  
  amt = map(mouseX, 0,width, 0,10)
  filter(BLUR, -10)
  //filter(THRESHOLD,0.47)

  for(let i = 0; i<amt; i++){
      fill(random(255),random(255),random(255))
      rect(random(width),random(height),random(120))
  }
 
}
  
  
