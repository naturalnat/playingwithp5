function setup() { 
    const size = min(windowWidth, windowHeight)
    createCanvas(size, size); 
    colorMode(RGB, 1);
    noStroke();
}



function draw() {
    scale(width, height);
    background(0);
    fill(1);

    //polar coordinates - relational in reference to location(pole)
    const count = 100;
    for (let i = 0; i < count; i++){
        const radius = 0.25;
        const f = i / count;
        const a = f;
        const x = 0.5 + cos(a * TWO_PI) * radius;
        const y = 0.5 + sin(a * TWO_PI) * radius; 
        const r = 0.01; 
        circle(x,y,r);
    }
}
