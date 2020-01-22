class Game {
  constructor() {
    this.defense = [];
    this.wrs = [];
    this.footballs = [];
    this.ballThrows = 0;
    this.wrCounter = 0;
  }

  init() {
    let backgroundImage = loadImage("./images/Field 100px.png");
    this.bg = new Background(backgroundImage);
    let jimmyImage = loadImage("./images/Jimmy G v2.gif");
    this.player = new Player(jimmyImage);
    this.footballs.push(new Football());
    this.wrs.push(new Wr(this.wrCounter));
  }

  draw() {
    this.bg.draw();

    this.player.draw();

    this.footballs.forEach(function(ball) {
      ball.draw();
    });

    if (frameCount % 200 === 0) {
      this.wrCounter += 1;
      this.wrs.push(new Wr(this.wrCounter));
    }
    this.wrs = this.wrs.filter(
      function(wr) {
        if (/*!obstacle.collides(this.player) &&*/ wr.y + wr.height >= 0) {
          return true;
        }
      }.bind(this)
    );

    this.wrs.forEach(function(wr) {
      wr.draw();
    });
  }
}

function keyPressed() {
  if (keyCode === 32) {
    game.footballs[game.ballThrows].pass = true;
    game.ballThrows++;
    game.footballs.push(new Football());
  }
}
