var n = 400;
var minRad = 1;
var maxRad = 300;
var Ang = 0.05;
var Time = 0.005;

function setup() {
  createCanvas(600, 800);
  background(101, 118, 245);
  noFill();
  stroke(255,132,91,50);
}

function draw() {
  translate(width/2, height/2);
  rotate(85);
  beginShape();
  for (var i=0; i<n; i++) {
    var ang = map(i, 0, n, 0, TAU);
    var rad = map(noise(i*Ang, frameCount*Time), 0, 1, minRad, maxRad);
    var x = rad * cos(ang);
    var y = rad * sin(ang);
    curveVertex(x, y);

  }
  endShape();
}
