function setup() {
  createCanvas(550, 300);
}

function draw() {
  background(220);
  translate(30, 30);
  rect(0, 0, 55, 55); // Draw rect at original 0,0
  translate(20, 20);
  rotate(PI / 12);
  rect(0, 0, 55, 55); // Draw rect at new 0,0
  translate(14, 14);
  rotate(PI / 12);
  rect(0, 0, 55, 55); // Draw rect at new 0,0
  translate(14, 14);
  rotate(PI / 12);
  rect(0, 0, 55, 55); // Draw rect at new 0,0
  translate(14, 14);
  rotate(PI / 12);
  rect(0, 0, 55, 55); // Draw rect at new 0,0
  translate(14, 14);
  rotate(PI / 12);
  rect(0, 0, 55, 55); // Draw rect at new 0,0
}
