class Football {
  constructor() {
    let footballImage = loadImage("./images/Football-still.png");
    this.img = footballImage;
    this.width = 28;
    this.height = 28;
    this.y = height - 125;
    this.pass = false;
  }

  draw() {
    if (!this.pass) {
      this.x = game.player.x + 42;
    }

    if (this.pass) {
      this.y -= 10;
    }

    image(this.img, this.x, this.y, this.width, this.height);
  }

  collides(obj) {
    if (this.x + this.width < obj.x || obj.x + obj.width < this.x) {
      return false;
    }

    if (this.y + this.height < obj.y || obj.y + obj.height < this.y) {
      return false;
    }
    return true;
  }
}
