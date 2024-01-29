function setup() {
  createCanvas(550, 300);
}

function draw() {
  background(220);
  rect(0, 0, 55, 55); // Draw rect at original 0,0
  translate(30, 20);
  rect(0, 0, 55, 55); // Draw rect at new 0,0
  translate(14, 14);
  rect(0, 0, 55, 55); // Draw rect at new 0,0
}
