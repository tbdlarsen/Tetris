function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(220);
  grid();

  fill(10);
  rect(50,50,50);

}

function grid(){

  for (var x = 0; x < width; x += width/10) {
    for(var y = 0; y < height; y += height/20){
      
      stroke(0);
		  strokeWeight(1);
		  line(x, 0, x, height);
      line(0, y, width, y);

    }

  }
}