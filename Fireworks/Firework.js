class Firework {
  constructor(color, speed) {
    this.original_speed = speed;
    this.is_poped = false;
    this.speed = -1 * speed;
    this.pos = createVector(floor(random(width)), height);
    this.color = color;
    this.is_done = false;
    this.particles = [];
    for (let i = 0; i < 50; i++) {
      this.particles.push(new Particle(this.color, this.pos.x, this.pos.y));
    }
  }

  update() {
    //if not poped keep going
    if (!this.is_poped) {
      this.speed += 10 * gravity.y;
      this.pos.y += this.speed;
      if (this.speed >= -1.5 || this.pos.y < 150) this.pop();
    }
  }

  show() {
    //if poped, show particles
    if (this.is_poped) {
      for (let i = 0; i < this.particles.length; i++) {
        const particle = this.particles[i];

        particle.applyForce(gravity);
        particle.show();
      }
    }
    //if not poped show firework
    else {
      noStroke(0);
      fill(this.color);
      ellipse(this.pos.x, this.pos.y, 10);
    }
  }

  is_burned_out() {
    if (this.is_poped) {
      for (let i = 0; i < this.particles.length; i++) {
        const particle = this.particles[i];
        if (particle.is_active) return false;
      }
      return true;
    }
    return false;
  }

  pop() {
    for (let i = 0; i < this.particles.length; i++) {
      const particle = this.particles[i];
      particle.pos.x = this.pos.x;
      particle.pos.y = this.pos.y;
    }
    this.is_poped = true;
  }

  reset(new_color) {
    this.is_poped = false;
    this.speed = -1 * this.original_speed;
    this.pos = createVector(floor(random(width)), height);
    this.color = new_color;
    this.is_done = false;
    this.particles = [];
    for (let i = 0; i < 100; i++) {
      this.particles.push(new Particle(this.color, this.pos.x, this.pos.y));
    }
  }
}
