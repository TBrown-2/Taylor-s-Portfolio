let hasBeenHoveredOver = [];

let columns = 30;
let rows = 25;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  let index = 0
  
  
  //initializes the array - ie fills it with 0s
   for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows; y++) {
      
      hasBeenHoveredOver[index] = 0;
      index++;
    }
   }
  
  print(hasBeenHoveredOver);
  
  //noStroke()
  //print(hasBeenHoveredOver)
}

function draw() {
  background(255);

  
  let index = 0;
  
  for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows; y++) {
      //this is the default white fill

      fill(255);

      
      
      if (hasBeenHoveredOver[index] == 1) {
        fill(255, 0, 0);
      }

      rect(x * width / columns, y*height/rows, width / columns, height/rows);
      
      
      fill(0);
    
      //text(index, x * width / columns +15, y* height/rows+15)

    
      index++
    
    }
  }
}

function mousePressed() {
  
  
  let index = 0;
  
  for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows; y++) {
  
   if (
        mouseX > x * width / columns &&
        mouseX < ((x + 1) * width) / columns &&
        mouseY > y * height / rows &&
        mouseY < (y+1) * height/rows
      ) {
     
     if(hasBeenHoveredOver[index] == 0){
       
        hasBeenHoveredOver[index] = 1;

     }
     else{
    
       hasBeenHoveredOver[index] = 0;
       
     }
     
     
     
     
      }
      
      index++;
    }
  }
  print(hasBeenHoveredOver);
  
  
  
}
