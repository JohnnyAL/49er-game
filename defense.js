class Defense {
  constructor(counter) {
    this.counter = counter;
    this.allImages = [
      loadImage("./images/Clowney-still.png"),
      loadImage("./images/Aaron-Donald-still.png"),
      loadImage("./images/Frank-Clark-still.png")
    ];
    this.img = this.allImages[this.counter % this.allImages.length];
    this.width = 250;
    this.height = 300;
    this.y = 0 - this.height;
    this.x = random(0, width - this.width);
  }

  draw() {
    this.y += 8;
    image(this.img, this.x, this.y, this.width, this.height);
  }
}
