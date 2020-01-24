class Game {
  constructor() {
    this.footballs = [];
    this.ballThrows = 0;
    this.wrs = [];
    this.wrCounter = 0;
    this.defense = [];
    this.defCounter = 0;
    this.score = 0;
    this.timeCounter = 1;
    this.start = false;
    this.snfsong;
  }

  init() {
    this.snfsong = loadSound("sounds/NBC-Sunday-Night-Football-Theme.mp3");
    let backgroundImage = loadImage("images/Field-100px.png");
    this.bg = new Background(backgroundImage);
    let jimmyImage = loadImage("images/Jimmy-G-v2.gif");
    this.player = new Player(jimmyImage);
    this.footballs.push(new Football());
    this.wrs.push(new Wr(this.wrCounter));
  }

  draw() {
    if (this.start === true) {
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
      if (frameCount % (50 - this.timeCounter) === 0) {
        this.defense.push(new Defense(this.defCounter));
        this.defCounter += 1;
      }

      if (frameCount % 120 === 0) {
        this.timeCounter += 1;
      }

      this.defense.forEach(function(defender) {
        defender.draw();
      });

      this.defense = this.defense.filter(
        function(defender) {
          if (!defender.collides(this.player) && defender.y <= height) {
            return true;
          } else if (defender.collides(this.player)) {
            noLoop();
            text("GAME OVER!", 275, 250);
            text("Press ENTER to play again", 150, 300);
          }
        }.bind(this)
      );

      this.wrs.forEach(wr => {
        this.footballs = this.footballs.filter(
          function(football, index) {
            if (!football.collides(wr) || wr.y > this.player.y - 75) {
              // NO COLLISION
              return true;
            }
            //COLLISION
            this.score += 7;
            this.ballThrows--;
          }.bind(this)
        );
      });

      // ------interceptions------
      // this.defense.forEach(defender => {
      //   this.footballs = this.footballs.filter(
      //     function(football, index) {
      //       if (football.collides(defender)) {
      //         // NO COLLISION
      //         return true;
      //       }
      //       //COLLISION
      //       noLoop();
      //       text("Game Over", 325, 250);
      //       text("Press ENTER to start again", 250, 300);
      //     }.bind(this)
      //   );
      // });

      textSize(40);
      textStyle(BOLD);
      text("Score: " + this.score, 40, 50);
    } else {
      this.bg.draw();
      textSize(30);
      textStyle(BOLD);
      text("Instructions", 315, 150);
      textStyle(NORMAL);
      text("1. LEFT ARROW (<) to move left", 175, 200);
      text("2. RIGHT ARROW (>) to move right", 175, 250);
      text("3. SPACE BAR to pass", 175, 300);
      text("4. WATCH OUT FOR DEFENDERS!!!", 175, 350);
      textSize(40);
      textStyle(BOLD);
      text("Press SPACE BAR to play", 165, 450);
    }
  }
}

function keyPressed() {
  if (keyCode === 32) {
    if (game.ballThrows < game.footballs.length && game.ballThrows >= 0) {
      game.footballs[game.ballThrows].pass = true;
    }
    game.footballs.push(new Football());
    game.ballThrows++;
  }

  if (keyCode === 32 && game.start === false) {
    game.start = true;
    game.snfsong.play();
  }

  if (keyCode === 13) {
    document.location.reload();
  }
}
