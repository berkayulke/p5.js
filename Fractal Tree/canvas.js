let max_iterataion;
let branch_amount;
let angle;
let multiplier;
let root;
let count = 0;
function setup() {
  createCanvas(700, 700);
  root = new Node(width / 2, height, 100, PI / 2);
  // constant to play with
  max_iterataion = 10;
  branch_amount = 3;
  angle = PI / 12;
  multiplier = 0.85;
}

function draw() {
  if (count == max_iterataion) noLoop();
  frameRate(1);
  background(124);
  root.show();
  root.add_new_gen(branch_amount, angle, multiplier);
  count++;
}
