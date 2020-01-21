let width = 1500;
let height = 1250;
const game = new Game();

function preload() {
  game.init();
}

function setup() {
  createCanvas(width, height);
}

function draw() {
  game.draw();
}

document.body.style.display = "flex";
document.body.style.justifyContent = "center";
