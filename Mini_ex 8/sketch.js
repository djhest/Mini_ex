var n = 0;
var c = 4;

var points = [];

var start = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  // colorMode(HSB);
}

function draw() {
  background(34, 134, 170);
  translate(width / 2, height / 2);
  rotate(n * 0.3);
  for (var i = 0; i < n; i++) {
    var a = i;
    var r = c * sqrt(i);
    var x = r * cos(a);
    var y = r * sin(a);
    var hu = sin(start + i * -1);
    hu = map(hu, -1, 1, 0, 360);
    fill(hu, 150, 255);
    noStroke();
    ellipse(x, y, 4, 4);
  }
  n += 10;
  if (n >= 2500) {
    n -= 10;
  }
  start += 5;
}
