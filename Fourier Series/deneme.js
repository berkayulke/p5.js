let graph = [];
let theate = 0.1;
let radius;
let frequency = 1;
let cir;
let last;

function setup() {
  radius = 400 / PI;
  createCanvas(1800, 800);
  c_point = createVector(0, 0);
  cir = new Circle(0, 0, radius, frequency);
  cir.create_child(1000);
  let current = cir;
  let counter = 1;
  while (current) {
    current.rad = 800 / (PI * counter);
    current.freq = counter;
    counter += 2;
    current = current.child;
  }
  last = cir.last_child();
}

function draw() {
  stroke(255);
  noFill();
  background(0);
  translate(300, height / 2);

  cir.show();
  cir.turn((theate += 0.01));
  last.trace();
}
