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

  create_child(amount, angle_increase, r_multi) {
    //this.theta represents 90 degress
    let zero = this.theta - HALF_PI;
    let n_x = this.next_x(this.theta);
    let n_y = this.next_y(this.theta);
    let n_r = this.r * r_multi;
    let n_t;
    if (amount % 2 == 1) {
      n_t = this.theta;
      this.childs.push(new Node(n_x, n_y, n_r, n_t));
      for (let i = 1; i < (amount + 1) / 2; i++) {
        n_t = this.theta + i * angle_increase;
        this.childs.push(new Node(n_x, n_y, n_r, n_t));
        n_t = this.theta - i * angle_increase;
        this.childs.push(new Node(n_x, n_y, n_r, n_t));
      }
    } else {
      n_t = this.theta + angle_increase / 2;
      this.childs.push(new Node(n_x, n_y, n_r, n_t));

      n_t = this.theta - angle_increase / 2;
      this.childs.push(new Node(n_x, n_y, n_r, n_t));

      for (let i = 1; i < amount / 2; i++) {
        //with thath angle, i'm gonna draw one at theate + angle_increse, one at theate - angle_increase
        n_t = this.theta + (i + 0.5) * angle_increase;
        this.childs.push(new Node(n_x, n_y, n_r, n_t));
        n_t = this.theta - (i + 0.5) * angle_increase;
        this.childs.push(new Node(n_x, n_y, n_r, n_t));
      }
    }
  }

  add_new_gen(amount, angle_increase, r_multi) {
    let current = this;
    if (current.childs.length == 0) {
      current.create_child(amount, angle_increase, r_multi);
    } else {
      for (let i = 0; i < current.childs.length; i++) {
        current.childs[i].add_new_gen(amount, angle_increase, r_multi);
      }
    }
  }
}
