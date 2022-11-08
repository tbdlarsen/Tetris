function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(220);
  grid();
}

function grid(){

  for (var x =width * (1/5); x <= width * (4/5); x += width/15) {
    stroke(0);
		strokeWeight(1);
		line(x, 0, x, height);

  }





}