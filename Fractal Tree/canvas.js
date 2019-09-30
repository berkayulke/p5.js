let max_iterataion;
let branch_amount;
let angle = 0;
let multiplier;
let root;
let count = 0;
let slider;
function setup() {
  slider = createSlider(0, PI / 2, PI / 12, PI / 120);
  createCanvas(1000, 700);
  root = new Node(width / 2, height + 300, 100, PI / 2);
  // constant to play with
  max_iterataion = 6;
  branch_amount = 3;
  multiplier = 0.85;
}

function draw() {
  if (angle != slider.value()) {
    background(124);
    angle = slider.value();
    count = 0;
    root = new Node(width / 2, height - 50, 100, PI / 2);
  } else if (count <= max_iterataion) {
    frameRate(20);
    background(124);
    root.show();
    root.add_new_gen(branch_amount, angle, multiplier);
    count++;
  }
}
