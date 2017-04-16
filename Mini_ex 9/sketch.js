var space;
var astro;
var amount;

function preload() {
		space = loadImage('assets/space.jpg');
		astro = loadImage('assets/astronaut.png');
}


function setup() {
	createCanvas(windowWidth,windowHeight);

	loadJSON("http://api.open-notify.org/astros.json", gotData, 'jsonp');
}



function gotData(data) {
	amount = data.number;
	background(space);
	// loadJSON("http://api.open-notify.org/astros.json", gotData, 'jsonp');
	push();
	imageMode(CENTER);
	for (var i = 0; i < amount; i++) {
		image(astro,random(width),random(height));
	}
	pop();

}
