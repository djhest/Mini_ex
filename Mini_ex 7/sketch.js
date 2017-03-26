var button;
var sliders = [];
var song;
var fft;
var gif;
var dancer;
var boxes = [];
var boks;
var kage;
var cols = 40;
var rows = 30;

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
    gif.pause();
  } else {
    song.play();
    gif.loop();
  }
}

function preload() {
  song = loadSound('assets/Kids.mp3');
  gif = createVideo('gif/james.mov');
}

function setup() {
  createCanvas(700,500)

  gif.position(200,200);
  button = createButton('toggle');
  button.mousePressed(toggleSong);
  button.position(100,100);
  song.play();
  gif.loop();

  fft = new p5.FFT(0.9,128);
  translate(-290,0);
  for (var i = 0; i < 140; i += 20) {
    sliders[i] = createSlider(0,300,0);
    sliders[i].position(i-50,300);
    sliders[i].style('width','200px');
    sliders[i].style('rotate','-90');
  }
}




function draw() {

  for (var i = 0; i < 140; i += 20) {
    var analyze = fft.analyze();
    var amp = analyze[i];
    var r = map(amp, 0, 256, 0, 300);
    sliders[i].value(r);
    var red = 0;
    var green = 0;
    var blue = 0;
    if(r <= 150) {
      red = 0;
      green = 200;
      blue = 0;
    } else if (r > 150 && r <= 225){
      red = 203;
      green = 201;
      blue = 5;
    } else if (r > 225) {
      red = 255;
      green = 0;
      blue = 0;
    }
    var col = color(red,green,blue);
    sliders[i].style("background-color",col);

  }
}
