let yPosition = 0;

class Background {
  constructor(img) {
    this.img = img;
  }

  draw() {
    image(this.img, 0, yPosition, 800, 600);
    image(this.img, 0, yPosition - height, 800, 600);

    yPosition += 1;

    if (yPosition >= height) {
      yPosition = 0;
    }
  }
}
