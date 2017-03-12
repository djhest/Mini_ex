var lines, lines2,lines3,lines4,lines5;
var counts, counts2, counts3, counts4, counts5;
var speech,speech2,speech3,speech4,speech5;

var args = {
ignoreCase: true,
ignoreStopWords: true,
ignorePunctuation: true
};
function preload() {
  lines = loadStrings('assets/dream.txt');
  lines2 = loadStrings('assets/JFK.txt');
  lines3 = loadStrings('assets/Roosevelt.txt');
  lines4 = loadStrings('assets/pearl.txt');
  lines5 = loadStrings('assets/jordan.txt');

  speech = loadSound('assets/sound/dream.mp3');
  speech2 = loadSound('assets/sound/JFK_1.mp3');
  speech3 = loadSound('assets/sound/roosevelt.mp3');
  speech4 = loadSound('assets/sound/roosevelt_2.mp3');
  speech5 = loadSound('assets/sound/jordan.mp3');
}

function setup() {
  createCanvas(1200,650);

  counts = RiTa.concordance(lines.join(" "),args);
  counts2 = RiTa.concordance(lines2.join(" "),args);
  counts3 = RiTa.concordance(lines3.join(" "),args);
  counts4 = RiTa.concordance(lines4.join(" "),args);
  counts5 = RiTa.concordance(lines5.join(" "),args);

  background(45,255,200);
  textAlign(CENTER,CENTER);
  noStroke();
  fill(0);
  textSize(32);
  text("Click one of the five buttons!",width/2,height/2);
  // textSize(24);
  // noStroke();
  // fill(255);
  noLoop();
}

function draw() {


var button = createButton('I Have A Dream - Martin Luther King Jr.');
button.mousePressed(counting);

var button2 = createButton('Inaugural Address - John F. Kennedy');
button2.mousePressed(counting2);

var button3 = createButton('First Inaugural Address - Franklin Delano Roosevelt');
button3.mousePressed(counting3);

var button4 = createButton('Pearl Harbor Address to the Nation - Franklin Delano Roosevelt');
button4.mousePressed(counting4);

var button5 = createButton('1976 DNC Keynote Address - Barbara Charline Jordan');
button5.mousePressed(counting5);
}

function counting() {
  background(45,255,200);
  if (speech.isPlaying() || speech2.isPlaying() || speech3.isPlaying() || speech4.isPlaying() || speech5.isPlaying) {
    speech.stop();
    speech2.stop();
    speech3.stop();
    speech4.stop();
    speech5.stop();
  }
  speech.play();
  speech.setVolume(0.1);
  speech.loop();
  for (var k in counts) {
    if (counts.hasOwnProperty(k)) {
      fill(random(255));
      textSize(counts[k]*8);
      text(k, random(width), random(height));
    }
  }
}

function counting2() {
  background(45,255,200);
  if (speech.isPlaying() || speech2.isPlaying() || speech3.isPlaying() || speech4.isPlaying() || speech5.isPlaying) {
    speech.stop();
    speech2.stop();
    speech3.stop();
    speech4.stop();
    speech5.stop();
  }
  speech2.play();
  speech2.setVolume(0.1);
  speech2.loop();
  for (var k in counts2) {
    if (counts2.hasOwnProperty(k)) {
      fill(random(255));
      textSize(counts2[k]*10);
      text(k, random(width), random(height));
    }
  }
}

function counting3() {
  background(45,255,200);
  if (speech.isPlaying() || speech2.isPlaying() || speech3.isPlaying() || speech4.isPlaying() || speech5.isPlaying) {
    speech.stop();
    speech2.stop();
    speech3.stop();
    speech4.stop();
    speech5.stop();
  }
  speech3.play();
  speech3.setVolume(0.1);
  speech3.loop();
  for (var k in counts3) {
    if (counts3.hasOwnProperty(k)) {
      fill(random(255));
      textSize(counts3[k]*10);
      text(k, random(width), random(height));
    }
  }
}

function counting4() {
  background(45,255,200);
  if (speech.isPlaying() || speech2.isPlaying() || speech3.isPlaying() || speech4.isPlaying() || speech5.isPlaying) {
    speech.stop();
    speech2.stop();
    speech3.stop();
    speech4.stop();
    speech5.stop();
  }
  speech4.play();
  speech4.setVolume(0.1);
  speech4.loop();
  for (var k in counts4) {
    if (counts4.hasOwnProperty(k)) {
      fill(random(255));
      textSize(counts4[k]*10);
      text(k, random(width), random(height));
    }
  }
}

function counting5() {
  background(45,255,200);
  if (speech.isPlaying() || speech2.isPlaying() || speech3.isPlaying() || speech4.isPlaying() || speech5.isPlaying) {
    speech.stop();
    speech2.stop();
    speech3.stop();
    speech4.stop();
    speech5.stop();
  }
  speech5.play();
  speech5.setVolume(0.3);
  speech5.loop();

  for (var k in counts5) {
    if (counts5.hasOwnProperty(k)) {
      fill(random(255));
      textSize(counts5[k]*4);
      text(k, random(width), random(height));
    }
  }
}
