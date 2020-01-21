let yPosition = 0;

class Background {
  constructor(img) {
    this.img = img;
  }

  roll() {
    image(this.img, 0, yPosition, 1500, 1250);
    image(this.img, 0, yPosition - height, 1500, 1250);

    yPosition += 2;

    if (yPosition >= height) {
      yPosition = 0;
    }
  }

  draw() {
    this.roll();
  }
}
