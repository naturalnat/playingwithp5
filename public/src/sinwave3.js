function setup() {
    createCanvas(windowWidth, windowHeight)

    angleMode(DEGREES)
    rectMode(CENTER)

}

function draw() {
    background(10, 20, 30) 
    noFill()
    stroke(255)

    translate(width / 2, height / 2)

    for (var i = 0; i < 200; i++) {
        push()
    
        rect (0, 0, 600 - i * 3, 600 - i * 3, 200 - i) 

        pop()
  }
}