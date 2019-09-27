let root;
let count = 0;
function setup() {
  createCanvas(700, 700);
  root = new Node(width / 2, height, 100, PI / 2);
}

function draw() {
  count == 10 ? noLoop() : console.log("sa");
  frameRate(1);
  background(124);
  //translate(400, 800);
  root.show();
  root.add_new_gen(PI / 8, 0.8);
  count++;
}
