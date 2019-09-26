const drop_length_mult = 3;
class Drop {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  show() {
    noStroke(0);
    fill(255, 150);
    rect(this.x, this.y, 2, drop_length_mult * this.z);
  }

  update() {
    this.y += gravity * this.z;
    if (this.y >= height) {
    }
  }
}
