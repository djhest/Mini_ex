

function setup() {
  createCanvas(displayWidth,displayHeight);
  
}

function draw() {
  background(0);
  
  noStroke();
  
  fill(255);
  rect(0,25,windowWidth,windowHeight);
  fill(0);
  rect(0,50,windowWidth,windowHeight);
  fill(255);
  rect(0,75,windowWidth,windowHeight);
  fill(0);
  rect(0,100,windowWidth,windowHeight);
  fill(255);
  rect(0,125,windowWidth,windowHeight);
  fill(0);
  rect(0,150,windowWidth,windowHeight);
  fill(255);
  rect(0,175,windowWidth,windowHeight);
  fill(0);
  rect(0,200,windowWidth,windowHeight);
  fill(255);
  rect(0,225,windowWidth,windowHeight);
  fill(0);
  rect(0,250,windowWidth,windowHeight);
  fill(255);
  rect(0,275,windowWidth,windowHeight);
  fill(0);
  rect(0,300,windowWidth,windowHeight);
  fill(255);
  rect(0,325,windowWidth,windowHeight);
  fill(0);
  rect(0,350,windowWidth,windowHeight);
  fill(255);
  rect(0,375,windowWidth,windowHeight);
  fill(0);
  rect(0,400,windowWidth,windowHeight);
  fill(255);
  rect(0,425,windowWidth,windowHeight);
  fill(0);
  rect(0,450,windowWidth,windowHeight);
  fill(255);
  rect(0,475,windowWidth,windowHeight);
  fill(0);
  rect(0,500,windowWidth,windowHeight);
  fill(255);
  rect(0,525,windowWidth,windowHeight);
  fill(0);
  rect(0,550,windowWidth,windowHeight);
  fill(255);
  rect(0,575,windowWidth,windowHeight);
  fill(0);
  rect(0,600,windowWidth,windowHeight);
  fill(255);
  rect(0,625,windowWidth,windowHeight);
  fill(0);
  rect(0,650,windowWidth,windowHeight);
  fill(255);
  rect(0,675,windowWidth,windowHeight);
  fill(0);
  rect(0,700,windowWidth,windowHeight);
  
   // hoved 1
  strokeWeight(5);
  stroke(88,75,83);
  fill(228,187,151);
  ellipse(mouseX,mouseY,100,100);
  
  strokeWeight(2);
  stroke(0);
  fill(255);
  ellipse(mouseX,mouseY-20,40,40);
  
  strokeWeight(3);
  stroke(97,192,255);
  fill(0);
  ellipse(mouseX,mouseY-20,10,10);
  
  stroke(210,92,99);
  triangle(mouseX-20,mouseY+10,mouseX+20,mouseY+10,mouseX,mouseY+40);
  
  //hoved 2
  
  if (mouseIsPressed) {
    
     background(255,WEBGL);
  
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