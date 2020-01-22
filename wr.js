class Wr {
  constructor(counter) {
    this.counter = counter;
    this.allImages = [
      loadImage("./images/Deebo Samuel.gif"),
      loadImage("./images/George Kittle.gif")
    ];
    this.img = this.allImages[this.counter % this.allImages.length];
    this.width = 175;
    this.height = 200;
    this.y = height;
    this.x = random(0, width - this.width);
  }

  draw() {
    this.y -= 3;
    image(this.img, this.x, this.y, this.width, this.height);
  }
}
