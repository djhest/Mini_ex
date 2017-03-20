var n = 400; //Number of particles in every vertex
var minRad = 1; // minimum radius of the vertex
var maxRad = 300; // maximum radius of the vertex
var Ang = 0.05; // these to variables decides the outcome of the vertex. The higher the number, the more smooth looking it becomes.
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
  beginShape(); //From here and down to endShape(), the shape is defined
  for (var i=0; i<n; i++) {
    var ang = map(i, 0, n, 0, TAU); //This one decides how long the vertex is and TAU is another way to use TWO_PI. It gives the same result and it means that the vertex will be in a circle like shape
    var rad = map(noise(i*Ang, frameCount*Time), 0, 1, minRad, maxRad); //This is defining the length of the radius between 1 and 300
    var x = rad * cos(ang); // These are the placement of the vertex
    var y = rad * sin(ang);
    curveVertex(x, y); //The curveVertex function draws a curve between different points and can only be used inside the beginShape and endShape

  }
  endShape();
}
