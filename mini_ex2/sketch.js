var col = {
  r : 0,
  g : 0,
  b : 0
};

function setup() {
  createCanvas(displayWidth,displayHeight);

}

function draw() {

if (mouseX < width/2) {
  frameRate(10);
} else {
  frameRate(60);
}


  col.r = random(0,126);
  col.g = random(127,255);
  background(col.r);

  noStroke();

  fill(col.g);
  rect(0,25,windowWidth,windowHeight);
  fill(col.r);
  rect(0,50,windowWidth,windowHeight);
  fill(col.g);
  rect(0,75,windowWidth,windowHeight);
  fill(col.r);
  rect(0,100,windowWidth,windowHeight);
  fill(col.g);
  rect(0,125,windowWidth,windowHeight);
  fill(col.r);
  rect(0,150,windowWidth,windowHeight);
  fill(col.g);
  rect(0,175,windowWidth,windowHeight);
  fill(col.r);
  rect(0,200,windowWidth,windowHeight);
  fill(col.g);
  rect(0,225,windowWidth,windowHeight);
  fill(col.r);
  rect(0,250,windowWidth,windowHeight);
  fill(col.g);
  rect(0,275,windowWidth,windowHeight);
  fill(col.r);
  rect(0,300,windowWidth,windowHeight);
  fill(col.g);
  rect(0,325,windowWidth,windowHeight);
  fill(col.r);
  rect(0,350,windowWidth,windowHeight);
  fill(col.g);
  rect(0,375,windowWidth,windowHeight);
  fill(col.r);
  rect(0,400,windowWidth,windowHeight);
  fill(col.g);
  rect(0,425,windowWidth,windowHeight);
  fill(col.r);
  rect(0,450,windowWidth,windowHeight);
  fill(col.g);
  rect(0,475,windowWidth,windowHeight);
  fill(col.r);
  rect(0,500,windowWidth,windowHeight);
  fill(col.g);
  rect(0,525,windowWidth,windowHeight);
  fill(col.r);
  rect(0,550,windowWidth,windowHeight);
  fill(col.g);
  rect(0,575,windowWidth,windowHeight);
  fill(col.r);
  rect(0,600,windowWidth,windowHeight);
  fill(col.g);
  rect(0,625,windowWidth,windowHeight);
  fill(col.r);
  rect(0,650,windowWidth,windowHeight);
  fill(col.g);
  rect(0,675,windowWidth,windowHeight);
  fill(col.r);
  rect(0,700,windowWidth,windowHeight);

   // hoved 1
   col.r = random(0,255);
   col.g = random(0,255);
   col.b = random(0,255);

  strokeWeight(5);
  stroke(col.r,col.g,col.b);
  fill(col.r,col.g,col.b);
  ellipse(mouseX,mouseY,100,100);

  strokeWeight(2);
  stroke(0);
  fill(col.r);
  ellipse(mouseX,mouseY-20,40,40);

  strokeWeight(3);
  stroke(col.r,col.g,col.b);
  fill(col.r);
  ellipse(mouseX,mouseY-20,10,10);

  stroke(col.r,col.g,col.b);
  triangle(mouseX-20,mouseY+10,mouseX+20,mouseY+10,mouseX,mouseY+40);

  //hoved 2

  if (mouseIsPressed) {
    frameRate(60);

     background(255);

  noStroke();

  fill(0);
  rect(0,25,windowWidth,windowHeight);
  fill(255);
  rect(0,50,windowWidth,windowHeight);
  fill(0);
  rect(0,75,windowWidth,windowHeight);
  fill(255);
  rect(0,100,windowWidth,windowHeight);
  fill(0);
  rect(0,125,windowWidth,windowHeight);
  fill(255);
  rect(0,150,windowWidth,windowHeight);
  fill(0);
  rect(0,175,windowWidth,windowHeight);
  fill(255);
  rect(0,200,windowWidth,windowHeight);
  fill(0);
  rect(0,225,windowWidth,windowHeight);
  fill(255);
  rect(0,250,windowWidth,windowHeight);
  fill(0);
  rect(0,275,windowWidth,windowHeight);
  fill(255);
  rect(0,300,windowWidth,windowHeight);
  fill(0);
  rect(0,325,windowWidth,windowHeight);
  fill(255);
  rect(0,350,windowWidth,windowHeight);
  fill(0);
  rect(0,375,windowWidth,windowHeight);
  fill(255);
  rect(0,400,windowWidth,windowHeight);
  fill(0);
  rect(0,425,windowWidth,windowHeight);
  fill(255);
  rect(0,450,windowWidth,windowHeight);
  fill(0);
  rect(0,475,windowWidth,windowHeight);
  fill(255);
  rect(0,500,windowWidth,windowHeight);
  fill(0);
  rect(0,525,windowWidth,windowHeight);
  fill(255);
  rect(0,550,windowWidth,windowHeight);
  fill(0);
  rect(0,575,windowWidth,windowHeight);
  fill(255);
  rect(0,600,windowWidth,windowHeight);
  fill(0);
  rect(0,625,windowWidth,windowHeight);
  fill(255);
  rect(0,650,windowWidth,windowHeight);
  fill(0);
  rect(0,675,windowWidth,windowHeight);
  fill(255);
  rect(0,700,windowWidth,windowHeight);


  strokeWeight(5);
  stroke(58,93,72);
  fill(228,64,143);
  ellipse(mouseX,mouseY,100,100);

  strokeWeight(2);
  stroke(0);
  fill(0);
  ellipse(mouseX,mouseY-20,40,40);

  strokeWeight(3);
  stroke(97,192,255);
  fill(255);
  ellipse(mouseX,mouseY-20,10,10);

  stroke(99,92,210);
  triangle(mouseX-20,mouseY+10,mouseX+20,mouseY+10,mouseX,mouseY+40);
  }




}
