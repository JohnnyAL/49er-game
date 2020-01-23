class Game {
  constructor() {
    this.footballs = [];
    this.ballThrows = 0;
    this.wrs = [];
    this.wrCounter = 0;
    this.defense = [];
    this.defCounter = 0;
    this.score = 0;
    this.start = false;
  }

  init() {
    let backgroundImage = loadImage("./images/Field-100px.png");
    this.bg = new Background(backgroundImage);
    let jimmyImage = loadImage("./images/Jimmy-G-v2.gif");
    this.player = new Player(jimmyImage);
    this.footballs.push(new Football());
    this.wrs.push(new Wr(this.wrCounter));
    this.defense.push(new Defense(this.defCounter));
  }

  draw() {
    this.bg.draw();

    this.player.draw();

    this.footballs.forEach(function(ball) {
      ball.draw();
    });

    // wr draw
    if (frameCount % 200 === 0) {
      this.wrCounter += 1;
      this.wrs.push(new Wr(this.wrCounter));
      // console.log(this.wrs);
    }

    this.wrs = this.wrs.filter(
      function(wr) {
        if (wr.y + wr.height >= 0) {
          return true;
        }
      }.bind(this)
    );

    this.wrs.forEach(function(wr) {
      wr.draw();
    });

    //defender draw
    if (frameCount % 50 === 0) {
      this.defCounter += 1;
      this.defense.push(new Defense(this.defCounter));
    }

    this.defense = this.defense.filter(
      function(defender) {
        if (!defender.collides(this.player) && defender.y <= height) {
          return true;
        } else if (defender.collides(this.player)) {
          noLoop();
          text("Game Over", 325, 250);
          text("Press ENTER to start again", 250, 300);
        }
      }.bind(this)
    );

    this.defense.forEach(function(defender) {
      defender.draw();
    });

    this.wrs.forEach(wr => {
      this.footballs = this.footballs.filter(
        function(football, index) {
          if (!football.collides(wr)) {
            // NO COLLISION
            return true;
          }
          this.score += 7;
          // console.log("COLLISION");
          this.ballThrows--;
        }.bind(this)
      );
    });

    textSize(30);
    text("SCORE: " + this.score, 50, 50);
  }
}

function keyPressed() {
  if (keyCode === 32) {
    if (game.ballThrows < game.footballs.length && game.ballThrows >= 0) {
      game.footballs[game.ballThrows].pass = true;
    }
    game.footballs.push(new Football());
    game.ballThrows++;
    // game.footballs = game.footballs.filter(function() {
    //   if (!game.footballs[game.ballThrows].collides(game.wrs[0])) {
    //     return true;
    //   }
    // });
  }
  if (keyCode === 13) {
    // game.start = true;
    document.location.reload();
  }
}
