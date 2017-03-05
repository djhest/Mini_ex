function Star(x,y,z) { // A so called constructor function which holds different functions and the star object

  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  this.pz = this.z;

  this.update = function() { // A function that decides the direction of the stars
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width,width);
      this.y = random(-height,height);
      this.pz = this.z;
    }
  }

  this.show = function() { // A function that holds the star object and how it looks
    var alph = map(z,0,width-10,100,0);
    fill(255);
    noStroke();

    var sx = map(this.x/this.z, 0, 1, 0, width);
    var sy = map(this.y/this.z, 0, 1, 0, height);
    var r = map(this.z,0,width,8,0);
    ellipse(sx,sy,r,r);
    stroke(232,44,41,alph);
    fill(255,0,0,alph);
    ellipse(sx,sy,r,r);

    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;
    if(speed == 500) { // If the speed equals 500, that is Hyper Speed, lines will be visible after each star because the rocket is so fast.
      strokeWeight(1);
      stroke(255);
      line(px,py,sx,sy);
      stroke(255,0,0,alph);
      line(px,py,sx,sy);
    }

    noFill(); // The white rectangle around it all
    strokeWeight(2);
    stroke(255);
    rect(-(width/2-10),-(height/2-10),780,780);
  }
}
