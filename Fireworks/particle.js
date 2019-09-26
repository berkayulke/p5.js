class Particle {
  constructor(color, x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-4, 4), random(-5, 1));
    this.acc = createVector(0, 0);
    this.brigthness = 255;
    this.color = color;
    this.is_active = true;
  }

  applyForce(force) {
    this.acc.add(force);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  show() {
    if (this.brigthness >= 0) {
      noStroke(0);
      fill(this.color);
      ellipse(this.pos.x, this.pos.y, 4);
      this.brigthness -= 5;
      this.color.setAlpha(this.brigthness);
    } else {
      this.is_active = false;
    }
  }
}
