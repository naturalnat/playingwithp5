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

    rect (0, 0, 600, 600)
}