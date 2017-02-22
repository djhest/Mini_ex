

var tal = 100;
var RNG;



function setup() {
  createCanvas(600,600);
  frameRate(60);











function draw() {
textSize(32);
text("Loading...", 230,400);

fill(232,218,178,20);
rect(0,0,width,height);



frameRate(60);
translate(width/2,height/2);
var cir = 360/-100*(frameCount%-100);
rotate(radians(cir));
noStroke();
fill(65,103,165,80);
ellipse(10,35,20,20);



}
