var r = {
  a: 219,
  b: 50,
  c: 54
};

var g = {
  a: 244,
  b: 294,
  c: 13
};

var b = {
  a: 60,
  b: 186,
  c: 84
};

var img;

function preload() {
  img = loadImage("man.png");

}

function setup() {
  createCanvas(800,600);
}

function draw() {
  fill(0,20);
  rect(0,0,width,height);


  image(img,300,200,400,400);


  drawThrobber(100);
  drawThrobber2(100);
  drawThrobber3(100);
  drawThrobber4(100);
  colorUp();
  colorMove();

}

function drawThrobber(num) {
  push();
  translate(width/2,height/3);
  var cir = 360/num*(frameCount%num);
  rotate(radians(cir));
  noStroke();
  fill(r.a, r.b, r.c, 255);
  ellipse(0,-55,20,20);
  pop();
}
function drawThrobber2(num) {
  push();
  translate(width/2,height/3);
  var cir = 360/num*(frameCount%num);
  rotate(radians(cir));
  noStroke();
  fill(g.a, g.b, g.c, 255);
  ellipse(50,25,20,20);
  pop();
}
function drawThrobber3(num) {
  push();
  translate(width/2,height/3);
  var cir = 360/num*(frameCount%num);
  rotate(radians(cir));
  noStroke();
  fill(b.a, b.b, b.c, 255);
  ellipse(-50,25,20,20);
  pop();
}
function drawThrobber4(num) {
  push();
  translate(width/2,height/3);
  var cir = 360/num*(frameCount%num);
  rotate(radians(cir));
  stroke(r.a,g.b,b.c);
  noFill();
  triangle(-40,20,40,20,0,-44);
  pop();
}

function colorUp() {
  if(r.a >= 255) {
    r.a = 0;
  }
  if(r.b >= 255) {
    r.b = 0;
  }
  if(r.c >= 255) {
    r.c = 0;
  }
  if(g.a >= 255) {
    g.a = 0;
  }
  if(g.b >= 255) {
    g.b = 0;
  }
  if(g.c >= 255) {
    g.c = 0;
  }
  if(b.a >= 255) {
    b.a = 0;
  }
  if(b.b >= 255) {
    b.b = 0;
  }
  if(b.c >= 255) {
    b.c = 0;
  }
}

function colorMove() {
  r.a = r.a + 100;
  r.b = r.b + 100;
  r.c = r.c + 100;
  g.a = g.a + 100;
  g.b = g.b + 100;
  g.c = g.c + 100;
  b.a = b.a + 100;
  b.b = b.b + 100;
  b.c = b.c + 100;
}
