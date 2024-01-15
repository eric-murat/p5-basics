function setup() {
  createCanvas(550, 300);
}

function draw() {
  background(220);
  //describe('A white rectangle with a black outline on a gray canvas.');
  rectMode(CORNER);
  fill(255);
  rect(50, 20, 100, 55);
  // Texte noir taille 18
  fill('black');
  textSize(18);
  text('rect(50, 20, 100, 55)', 180, 50);

  fill('yellow');
  rect(50, 100, 100, 55, 20);
  // Texte noir taille 18
  fill('black');
  text('rect(50, 100, 100, 55, 20)', 180, 130);

  fill('green');
  rect(50, 200, 100, 55, 0, 10, 20, 30);
  // Texte noir taille 18
  fill('black');
  text('rect(50, 200, 100, 55, 0, 10, 20, 30)', 180, 230);


}
