function setup() {
  createCanvas(600, 800);
}

function draw() {
  background(220);
  grid();
}

function grid(){

  for (var x = 0; x <= width; x += width/10) {
    stroke(0);
		strokeWeight(1);
		line(x, 0, x, height);

  }





}