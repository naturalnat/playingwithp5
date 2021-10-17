function setup() {
    createCanvas(displayWidth, displayHeight);
}

function draw() {
        background(220); 
        for(let i=0; i<1000; i+=10){
        noFill();
        stroke('purple')
        strokeWeight(4)
        ellipse(550, 450, i, i)
        stroke('red')
        strokeWeight(3)
        ellipse(550, 450, 500-i, 500-i)
}
    }

//IP 