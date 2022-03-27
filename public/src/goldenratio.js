//yt creative coding golden ratio tutorial 

function setup() { 
    const size = min(windowWidth, windowHeight)
    createCanvas(size, size); 
    colorMode(RGB, 1);
    noStroke();
}

function cosine(y){
    return cos (y * TWO_PI) * 0.5 + 0.5
}

function invCosine(y) {
  return 1 - cosine(y)
}

//functions used below in zoom out effect -- zooms in & out 

const radius = Math.sqrt(0.5);
const PHI = (1 + Math.sqrt(5)) / 2 //phi = "the golden ratio", most irrational number 
const dotSize = 0.05;

let t;
const frames = 1000; 

function draw() {
    t = fract(frameCount / frames); //stays btwn 0-1 when looping and loops forever
   
    scale(width, height);
    background(0);
    fill(1);

    //polar coordinates - relational in reference to location(pole)
   
    const count = 1000 * invCosine(t); //zoom out effect
    for (let i = 0; i < count; i++){ //doing count * t will give growing effect from center out 
        const f = i / count;
        const a = i * PHI; 
        const dist  = f * radius; 

        const x = 0.5 + cos(a * TWO_PI) * dist;
        const y = 0.5 + sin(a * TWO_PI) * dist; 
       
        const r = f * dotSize; //changes dot size so smaller in middle  
        circle(x, y, r);
    }
}
