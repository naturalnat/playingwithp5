//yt creative coding golden ratio tutorial 

function setup() { 
    const size = min(windowWidth, windowHeight)
    createCanvas(size, size); 
    colorMode(RGB, 1);
    noStroke();
}

const radius = Math.sqrt(0.5);
const PHI = (1 + Math.sqrt(5)) / 2 //phi = "the golden ratio", most irrational number 
const dotSize = 0.05;

function draw() {
    scale(width, height);
    background(0);
    fill(1);

    //polar coordinates - relational in reference to location(pole)
   
    const count = 1000;
    for (let i = 0; i < count; i++){
        const f = i / count;
        const a = i * PHI;
        const dist  = f * radius; 
        const x = 0.5 + cos(a * TWO_PI) * dist;
        const y = 0.5 + sin(a * TWO_PI) * dist; 
       
        const r = f * dotSize; //changes dot size so smaller in middle  
        circle(x, y, r);
    }
}
