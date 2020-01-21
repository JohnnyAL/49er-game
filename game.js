class Game {
  constructor() {
    this.defense = [];
    this.wrs = [];
  }

  init() {
    let backgroundImage = loadImage("./images/Field 100px.png");
    this.bg = new Background(backgroundImage);
    let jimmyImage = loadImage("./images/Jimmy G.gif");
    this.player = new Player(jimmyImage);
  }

  draw() {
    this.bg.draw();
    this.player.draw();
    if (keyIsDown(LEFT_ARROW)) {
      this.player.moveLeft();
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.player.moveRight();
    }
  }
}
