let song 

function preload() {
    song = loadSound('/src/Ochi_Chernye.mp3')
}

function setup() { 
    createCanvas(windowWidth, windowHeight); 

}

function draw(){
    background(0);
}

function mouseClicked() {
    if (song.isPlaying()) {
        song.pause()
    } else { 
        song.play()
    }
}


// function canvasPressed() {
//     // playing a sound file on a user gesture
//     // is equivalent to `userStartAudio()`
//     song.play();
//   }