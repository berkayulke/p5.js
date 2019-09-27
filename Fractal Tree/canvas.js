let root;
let count = 0;
function setup() {
  createCanvas(800, 800);
  root = new Node(width / 2, height / 2, 50, PI / 2);
}

function draw() {
  count == 3 ? noLoop() : console.log("sa");
  frameRate(1);
  background(124);
  //translate(400, 800);
  root.show();
  root.add_new_gen(10);
  count++;
}
