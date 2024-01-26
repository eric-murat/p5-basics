function setup() {
  createCanvas(550, 300);
}

function draw() {
  background(220);
  ellipseMode(CENTER);
  fill(255);
  ellipse(100, 50, 50, 50);
    // Texte noir taille 18
  fill('black');
  textSize(18);
  text('ellipse(100, 50, 50, 50)', 180, 50);

  fill('yellow');
  ellipse(100, 130, 100, 30);
  // Texte noir taille 18
  fill('black');
  text('ellipse(100, 130, 100, 30)', 180, 130);

  fill('green');
  ellipse(100, 220, 20, 70);
  // Texte noir taille 18
  fill('black');
  text('ellipse(100, 220, 20, 70)', 180, 230);


}
