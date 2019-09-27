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

  create_child(angle_increase, r_multi) {
    //let zero = this.theta - HALF_PI;
    let increase = angle_increase;
    let angle = this.theta + increase;

    let n_x = this.next_x(this.theta);
    let n_y = this.next_y(this.theta);
    let n_r = this.r * r_multi;
    let n_t = angle;
    let new_c = new Node(n_x, n_y, n_r, n_t);
    this.childs.push(new_c);
    increase *= -2;

    n_t = angle + increase;
    new_c = new Node(n_x, n_y, n_r, n_t);
    this.childs.push(new_c);
  }

  add_new_gen(angle_increase, r_multi) {
    let current = this;
    if (current.childs.length == 0) {
      current.create_child(angle_increase, r_multi);
    } else {
      for (let i = 0; i < current.childs.length; i++) {
        current.childs[i].add_new_gen(angle_increase, r_multi);
      }
    }
  }
}
