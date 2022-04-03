let song 
let fft 

function preload() {
    song = loadSound('/src/Ochi_Chernye.mp3')
}

function setup() { 
    createCanvas(windowWidth, windowHeight); 
    fft = new p5.FFT() //FFT is Fast Fourier Transform - ever frame will analyze sound and return array 

}

function draw(){
    background(0);
    stroke(225);

    const wave = fft.waveform()
    //store waveform data 
    //waveform method returns array w elements

    for (let i = 0; i < width; i++){ //loop thru waveform data to create wave across canvas 
        let index = floor(map(i, 0, width, 0, wave.length)) //value of index must be int so has to be floored; need to map to create wave
    
        const x = i //for loop variable 
        const y = wave[index] * 300 + height / 2 // waveform value at current index; waveform val is btwn -1 and 1 so make bigger 
        //offset height to middle of canvas 
        point(x, y)
    }
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