class Game {
  constructor() {
    this.defense = [];
    this.wrs = [];
    this.footballs = [];
    this.ballThrows = 0;
  }

  init() {
    let backgroundImage = loadImage("./images/Field 100px.png");
    this.bg = new Background(backgroundImage);
    let jimmyImage = loadImage("./images/Jimmy G v2.gif");
    this.player = new Player(jimmyImage);
    this.footballs.push(new Football());
  }

  draw() {
    this.bg.draw();
    this.player.draw();
    this.footballs.forEach(function(ball) {
      ball.draw();
    });
    // if (this.footballs[0].y < 0) {
    //   this.footballs.splice(0, 1, new Football());
    //   console.log(this.footballs);
    // }

    // this.footballs[0].draw();
    // if (keyPressed()) {
    //   this.football.passStraight();
    // }
    // keyPressed();
  }
}

function keyPressed() {
  if (keyCode === 83) {
    game.footballs[game.ballThrows].pass = true;
    game.footballs[game.ballThrows].originX = game.player.x + 106;
    game.ballThrows++;
    game.footballs.push(new Football());
  }
}
