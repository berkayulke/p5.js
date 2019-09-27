class Node {
  constructor(x, y, r, theta) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.theta = theta;
    this.childs = [];
  }

  next_x(angle) {
    return this.x + this.r * cos(angle);
  }
  next_y(angle) {
    return this.y - this.r * sin(angle);
  }

  show() {
    stroke(255);
    ellipse(this.x, this.y, 3);
    line(this.x, this.y, this.next_x(this.theta), this.next_y(this.theta));
    for (let i = 0; i < this.childs.length; i++) {
      this.childs[i].show();
    }
  }

  create_child(amount) {
    let zero = this.theta - HALF_PI;
    let increase = PI / (amount - 1);
    let angle = zero;

    for (let i = 1; i < amount + 1; i++) {
      let n_x = this.next_x(this.theta);
      let n_y = this.next_y(this.theta);
      let n_r = this.r; //* 0.5;
      let n_t = angle;
      let new_c = new Node(n_x, n_y, n_r, n_t);
      this.childs.push(new_c);
      angle += increase;
    }
  }

  add_new_gen(amount) {
    let current = this;
    if (current.childs.length == 0) current.create_child(amount);
    else {
      for (let i = 0; i < current.childs.length; i++) {
        current.childs[i].add_new_gen(amount);
      }
    }
  }
}
