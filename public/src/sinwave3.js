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

    rotate(sin(frameCount + i))
    for (var i = 0; i < 200; i++) {
        push()


        rotate(sin(frameCount + i) * 100)
        rect(0, 0, 600 - i * 3, 600 - i * 3, 200 - i)
        //for every loop width and height should be decreased 

        pop()
    }
}