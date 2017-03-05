// Different variables
var cage;
var cageHead;
var raket;
var cageMoon;
speed = 0;
var star = []; // An array for the stars
moon = "Moon";
sun = "Sun";
sun2 = "Sun";
picx = 170;
picx2 = 400;
var distance = 10000000;
var kmPassed = 0;
var ps;


function preload() {
  cage = loadImage("assets/cage2.png");
  cage2 = loadImage("assets/cage2.png");
  cageHead = loadImage("assets/cage_hoved.png");
  cageHead2 = loadImage("assets/cage_hoved.png");
  raket = loadImage("assets/raket.png");
  cageMoon = loadImage("assets/cage_moon.png");
}

function setup() {
  createCanvas(800,800);
  for (var i = 0; i < 900; i++) {
      star.push(new Star(random(-width,width),random(-height,height),random(width)));
  }

}

function draw() {
  background(0);
  imageMode(CENTER);

  ps = map(distance,10000000,0,20,1000); // The size of the picture is mapped to the amount of distance left

  push(); // The rotation of the suns outer
  translate(width/2,height/2);
  var cir = 360/360*(frameCount%360);
  rotate(radians(cir));
  image(cage,0,0,ps,ps);
  pop();

  image(cageHead,width/2,height/2,ps,ps);

  push();
  translate(width/2,height/2);
  for (var i = 0; i < star.length; i++) { // These functions run for every object in the array.
    star[i].update();
    star[i].show();
  }
  pop();

  image(raket,picx2,750,75,75); // The rocket at the bottom.
  if (speed > 0) {              // If the speed is bigger than 0 it will move a bit from side to side
  picx2 = picx2 + random(-1,1);
  }
  if (picx2 <= width/3 || picx2 >= width/3*2) { // If the position of the rocket reaches 1/3 or 2/3 of the canvas it will change the direction
    picx2 *= -1;
  }

  translate(0,0); // All the text
  strokeWeight(4);
  stroke(255);
  fill(0);
  textSize(60);
  text("Journey To The " + sun + "!",115,70);
  noStroke();
  fill(255);
  textSize(20);


  if (speed == 100) { 
    text("Speed: MAX", 20, 780);
  } else if (speed <= 99){
    text("Speed: " + speed*10000 + " Light Years/h", 20, 780);
  }
  if (speed == 500) {
  text("Speed: Hyper speed",20,780);
  }
  textSize(16);
  text("Distance To The " + sun + ": " + distance + " Light Years",450,780);

  if (speed > 0) {
    distance = distance - kmPassed;
  }
  if (distance == 0) {
    speed = 0;
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW && speed <= 99) {
    for (var i = 1; i <= 1; i += 1) {
      speed = speed + 2;
    }
    kmPassed = kmPassed + 10;
    picx -= 3;
  }
  if (keyCode === DOWN_ARROW && speed > 0 && speed <= 100) {
    for (var i = 1; i >= 1; i -= 1) {
      speed = speed - 2;
    }
    kmPassed = kmPassed - 10;
    picx += 2;
  }
  if (keyCode === RIGHT_ARROW) {
    cage = cageMoon;
    cageHead = cageMoon;
    sun = moon;
   }
  if (keyCode === LEFT_ARROW) {
    cage = cage2;
    cageHead = cageHead2;
    sun = sun2;
  }
  if (speed == 100 && keyCode === 32) {
    speed = 500;
  }
  if (speed == 500 && keyCode === DOWN_ARROW) {
    speed = 100;
  }
}
