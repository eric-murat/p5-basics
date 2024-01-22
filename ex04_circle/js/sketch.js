function setup() {
  createCanvas(550, 300);
}

function draw() {
  background(220);
  //describe('A white rectangle with a black outline on a gray canvas.');
  rectMode(CORNER);
  fill(255);
  circle(100, 50, 50);
    // Texte noir taille 18
  fill('black');
  textSize(18);
  text('circle(100, 50, 50)', 180, 50);

  fill('yellow');
  circle(100, 130, 100);
  // Texte noir taille 18
  fill('black');
  text('circle(100, 130, 100)', 180, 130);

  fill('green');
  circle(100, 220, 10);
  // Texte noir taille 18
  fill('black');
  text('circle(100, 220, 10)', 180, 230);


}
