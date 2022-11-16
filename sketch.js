function setup() {
  createCanvas(1536, 720);
}

function draw() {
  background(220);
  grid();

  

}

function grid(){
  var gridRow = 16;
  var gridCol = 9;

  var xPlus = width/gridRow;
  var yPlus = height/gridCol;

  for (var x = 0; x < width; x += xPlus) {
    for(var y = 0; y < height; y += yPlus){
      
      stroke(0);
		  strokeWeight(1);
		  line(x, 0, x, height);
      line(0, y, width, y);
      
    }

  }
}