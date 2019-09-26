const firework_count = 40;

let gravity;
let fireworks = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  gravity = createVector(0, 0.01);

  for (let i = 0; i < firework_count; i++) {
    pcolor = color(random(255), random(255), random(255));
    fireworks.push(new Firework(pcolor, random(7, 13)));
  }

  stroke(255);
  strokeWeight(4);
}

function draw() {
  background(0);
  for (let i = 0; i < firework_count; i++) {
    const firework = fireworks[i];
    if (firework.is_burned_out()) {
      pcolor = color(random(255), random(255), random(255));
      firework.reset(pcolor);
    } else {
      firework.update();
      firework.show();
    }
  }
}
