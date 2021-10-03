//this is the provided example on p5 ... will play more with this later

function setup() {
    // Create the canvas
    createCanvas(1000, 500);
    background(000);
  
    // Set colors
    fill(204, 131, 292, 227);
    stroke(127, 63, 120);
  
    // A rectangle
    rect(40, 120, 120, 40);
    // An ellipse
    ellipse(240, 240, 80, 80);
    // A triangle
    triangle(400, 100, 350, 200, 410, 100);
  
    // A design for a simple flower
    translate(580, 200);
    noStroke();
    for (let i = 0; i < 10; i ++) {
      ellipse(0, 30, 20, 80);
      rotate(PI/5);
    }
  }