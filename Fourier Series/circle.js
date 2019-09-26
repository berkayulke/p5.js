class Circle {
  constructor(x, y, radius, freq) {
    this.x = x;
    this.y = y;
    this.rad = radius;
    this.freq = freq;
    this.child = null;
    this.parent = null;
    this.tracing = false;
  }
  create_child(count, scale) {
    scale = scale || 1 / 2;
    let current = this;
    for (let i = 0; i < count; i++) {
      current.child = new Circle(
        current.x + current.rad / 2,
        current.y,
        current.rad * scale
      );
      current = current.child;
    }
  }
  show() {
    ellipse(this.x, this.y, this.rad);
    fill(255);
    ellipse(this.x, this.y, this.rad / 15);
    noFill();
    if (this.child) this.child.show();
    if (this.tracing) graph.unshift(this.y);
  }

  // time is delta t
  turn(time) {
    if (this.child) {
      let new_x = this.x + (this.rad * cos(this.freq * time * 2)) / 2;
      let new_y = this.y + (this.rad * sin(this.freq * time * 2)) / 2;
      this.child.x = new_x;
      this.child.y = new_y;
      this.child.turn(time);
    }
  }
  all() {
    let array = [];
    let current = this;
    while (current) {
      array.push(current);
      current = current.child;
    }
    return array;
  }
  last_child() {
    let current = this;
    while (current.child) {
      current = current.child;
    }
    return current;
  }
  trace() {
    this.tracing = true;
    beginShape();
    noFill();
    for (let i = 0; i < graph.length; i++) {
      vertex(i + 100, graph[i]);
    }
    endShape();
  }
}
