function setup() {
    createCanvas(displayWidth, displayHeight);
    background(0);
    strokeWeight(30);
    frameRate(6);
  }
  
  function draw() {
    for (let i = 0; i < width; i++) {
      let r = random(55);
      stroke(r);
      line(i, 2, i, height);
    }
  }