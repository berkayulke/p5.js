const max_itterations = 1250;
const inf = 16;

let slider;

let mandel_brot_numbers = [];

let julia_const;
let julia_index;

let header;
let index;
let button;

let map_x_start = 2.0;
let map_x_end = 2.0;

let map_y_start = 2.0;
let map_y_end = 2.0;

let x_minus = 0.0;
let y_minus = 0.0;

let change_by = 0.1;

function setup() {
  frameRate(0.5);
  mandel_brot_numbers = get_mandelbrot_numbers();
  julia_index = floor(random(mandel_brot_numbers.length));
  julia_const = mandel_brot_numbers[julia_index];
  createCanvas(400, 400);
  slider = createSlider(0, mandel_brot_numbers.length, 0, 1);
  pixelDensity(1);
  index = document.getElementById("index");
}

function draw() {
  document.getElementById("header").innerHTML = "C = " + julia_const.print();
  julia_index = slider.value();
  index.innerHTML = "Current index = " + julia_index;
  julia_const = mandel_brot_numbers[julia_index];
  julia_index % mandel_brot_numbers.length;
  loadPixels();
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      //get re and im for current pixel
      let re = map(
        x,
        0,
        width,
        -1 * map_x_start - x_minus,
        map_x_end - x_minus
      );
      let im = map(
        y,
        0,
        height,
        -1 * map_y_start - y_minus,
        map_y_end - y_minus
      );

      let c = new Inumber(re, im);

      let bright = 0;
      if (c.is_in_set(julia_const)) {
        bright = 255;
      }

      let pix = (x + y * width) * 4;
      pixels[pix + 0] = bright;
      pixels[pix + 1] = bright;
      pixels[pix + 2] = bright;
      pixels[pix + 3] = 255;
    }
  }
  //zoom_in();
  //go_left(change_by);
  //go_top(change_by);
  //zoom_in(change_by);
  updatePixels();
}
