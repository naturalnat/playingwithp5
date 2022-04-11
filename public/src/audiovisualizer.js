let song
let fft

function preload() {
    song = loadSound('/src/UVV.mp3')
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    fft = new p5.FFT() //FFT is Fast Fourier Transform - ever frame will analyze sound and return array 

}

function draw() {
    background(0);
    stroke(225);
    noFill();

    translate(width / 2, height / 2)

    const wave = fft.waveform()
    //store waveform data 
    //waveform method returns array w elements

    // beginShape() //connect points with line
    // for (let i = 0; i >= 180; i++) { //loop thru waveform data to create wave across canvas 
    //     const index = floor(map(i, 0, 180, 0, wave.length - 1)) //value of index must be int so has to be floored; need to map to create wave

    //     const r = map(wave[index], -1, 1, 150, 200)

    //     const x = r * sin(i)
    //     const y = r * cons(i)

    //     vertex(x, y)
    // }
    // endShape()
    for (let t = -1; t <=1; t+= 2) {

    beginShape() //connect points with line
    for (let i = 0; i <= 180; i++) { //loop thru waveform data to create wave across canvas 
        const index = floor(map(i, 0, 180, 0, wave.length - 1)) //value of index must be int so has to be floored; need to map to create wave

        const r = map(wave[index], -1, 1, 150, 200)

        const x = r * -sin(i) * t 
        const y = r * cos(i)

        vertex(x, y)
    }
    endShape()
}
}

//     beginShape() //connect points with line
//     for (let i = 0; i <= 180; i++) { //loop thru waveform data to create wave across canvas 
//         const index = floor(map(i, 0, 180, 0, wave.length - 1)) //value of index must be int so has to be floored; need to map to create wave

//         const r = map(wave[index], -1, 1, 150, 200)

//         const x = r * sin(i)
//         const y = r * cos(i)

//         vertex(x, y)
//     }
//     endShape()
// }


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