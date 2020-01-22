class Player {
  constructor(img) {
    this.img = img;
    this.width = 175;
    this.height = 200;
    this.x = width / 2 - this.width / 2;
    this.y = height - this.height - 50;
  }

  draw() {
    image(this.img, this.x, this.y, this.width, this.height);
    if (keyIsDown(LEFT_ARROW)) {
      this.moveLeft();
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.moveRight();
    }
  }

  moveLeft() {
    if (this.x >= 0) {
      this.x -= 5;
    }
  }

  moveRight() {
    if (this.x <= width - this.width) {
      this.x += 5;
    }
  }
}
