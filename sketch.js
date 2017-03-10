var widthC, heightC;
var apercuMono;

function resize() {
    widthC = window.innerWidth;
    heightC = window.innerHeight;
}

function windowResized() {
    resize();
    resizeCanvas(widthC, heightC);
}


function preload() {
  	apercuMono = loadFont('assets/apercu_mono_pro.otf');
}

function setup() {
	  resize();
	  createCanvas(widthC, heightC);
	
  	
}

function draw() {
	  background(0);

    strokeCap(SQUARE);
  	
  	var h = hour();
  	var m = minute();
  	var s = second() + 1;
  	
  	var hours = map(h, 0, 24, 0, width);
  	var minutes = map(m, 0, 60, 0, width);
  	var seconds = map(s, 0, 60, 0, width);
  	
  	noStroke();
    
    if (h < 8) {
      var dayNight = color (100, 124, 138);
      var backColor = color(200);
    } else if (h > 20) {
      var dayNight = color (100, 124, 138);
      var backColor = color(200);
    } else {
      var dayNight = color (79, 195, 247);
      var backColor = color(255);
    }

    fill(backColor);
    rect(0, 0, width, height)

  	fill(dayNight);
  	rect(0, 0, hours, height/2.1);
  	rect(0, (height/2.1), minutes, height/2.1);
  	rect(0, 2*(height/2.1), seconds, height/20);

    for ( var i = 0 ; i < 25 ; i++) {
      strokeWeight(width/180);
      stroke(backColor);
      line((width/24)*i, 0, (width/24)*i, height/2.1);
    }

    for ( var i = 0 ; i < 61 ; i++) {
      strokeWeight(width/180);
      stroke(backColor);
      line((width/60)*i, height/2.1, (width/60)*i, 2*(height/2.1));
    }

    for ( var i = 0 ; i < 61 ; i++) {
      strokeWeight(width/180);
      stroke(backColor);
      line((width/60)*i, 2*(height/2.1), (width/60)*i, height);
    }    

    stroke(backColor); 
    strokeWeight(width/100); 
    line(0, 0, width, 0);
    strokeWeight(width/70); 
    line(0, (height/2.1), width, (height/2.1));
    strokeWeight(width/70); 
    line(0, (2*(height/2.1)), width, (2*(height/2.1)));
    strokeWeight(width/100);
    line(0, height, width, height);
  	
  	
}

