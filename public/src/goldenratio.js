function setup() { 
    createCanvas(windowWidth, windowHeight); 
    colorMode(RGB, 1);
    noStroke();
}

function draw() {
    scale(width, height);
    background(0);
    fill(1);

    //polar coordinates - relational in reference to location(pole)
    const a = 0.5;
    const radius = 0.1;
    const x = 0.5 + cos(a * 3.14) * radius;
    const y = 0.5 + sin(a * 3.14) * radius; 
    const r = 0.01; 
    circle(x,y,r);
}