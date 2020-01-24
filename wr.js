class Wr {
  constructor(counter) {
    this.counter = counter;
    this.allImages = [
      loadImage("images/Deebo-Samuel-still.png"),
      loadImage("images/George-Kittle-still.png")
    ];
    this.img = this.allImages[this.counter % this.allImages.length];
    this.width = 75;
    this.height = 90;
    this.y = height;
    this.x = random(0, width - this.width);
  }

  draw() {
    this.y -= 1.5;
    image(this.img, this.x, this.y, this.width, this.height);
  }
}
