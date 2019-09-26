let rain = [];
let gravity = 1;
const drop_amount = 1200;
const max_z = 10;
const min_z = 4;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for (let i = 0; i < drop_amount; i++) {
    rain.push(new Drop(random(width), random(height), random(max_z) + min_z));
  }
}

function draw() {
  background(122);
  for (let i = 0; i < drop_amount; i++) {
    let drop = rain[i];
    drop.show();
    drop.update();
    if (drop.y > height) {
      drop.y = 0;
    }
  }
}
