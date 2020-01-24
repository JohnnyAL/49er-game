class Defense {
  constructor(counter) {
    this.counter = counter;
    this.allImages = [
      loadImage("images/Clowney-still.png"),
      loadImage("images/Aaron-Donald-still.png"),
      loadImage("images/Frank-Clark-still.png")
    ];
    this.img = this.allImages[this.counter % this.allImages.length];
    this.width = 130;
    this.height = 150;
    this.y = 0 - this.height;
    this.x = random(0, width - this.width);
  }

  draw() {
    this.y += 5;
    image(this.img, this.x, this.y, this.width, this.height);
  }

  collides(obj) {
    if (this.x + 80 < obj.x || obj.x + 35 < this.x) {
      return false;
    }

    if (this.y + 115 < obj.y || obj.y + 20 < this.y) {
      return false;
    }
    return true;
  }
}
