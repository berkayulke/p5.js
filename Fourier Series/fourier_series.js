const array_lentgh = 100;
let theate = 0;
let x = 0;
let y = 0;
let radius = 50;
let c_point;
let graph = [];

function setup() {
  createCanvas(600, 600);
  c_point = createVector(0, 0);
}

function draw() {
  background(0);
  translate(300, 300);

  x = radius * cos(theate);
  y = radius * sin(theate);
  graph.unshift(y);
  c_point = createVector(100 + pow(cos(theate), 2) + pow(sin(theate), 2), y);
  theate -= 0.05;

  fill(255);
  beginShape();
  noFill();
  for (let i = 0; i < graph.length; i++) {
    vertex(i + 100, graph[i]);
  }
  endShape();

  noFill();
  stroke(255);

  ellipse(0, 0, radius * 2);

  //öncekinin ucu bunun merkezi oldu
  ellipse(x, y, radius);

  //

  let new_x = x + (radius * cos(theate * 2)) / 2;
  let new_y = y + (radius * sin(theate * 2)) / 2;
  ellipse(new_x, new_y, radius / 2);
  fill(255);
  line(0, 0, x, y);
  //line(x, y, c_point.x, c_point.y);

  //ellipse(x, y, 10);

  if (graph.length > 200) {
    graph.pop();
  }
}
