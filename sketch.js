
function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  background(220);
  grid();

  

}

function grid(){
  var gridRow = 80;
  var gridCol = 45;

  var xPlus = width/gridRow;
  var yPlus = height/gridCol;

  for (var x = 0; x < width; x += xPlus) {
    for(var y = 0; y < height; y += yPlus){
      
		  line(x, 0, x, height);
      line(0, y, width, y);
      
    }

  }
}