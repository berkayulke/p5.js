// Fourier Series
// Daniel Shiffman
// https://youtu.be/Mm2eYfj0SgA

const do_filtering = true;
const noise_coif = 0;
const filter_value = 0;

let y = [];
let fourierY;

let time = 0;
let wave = [];

function f(x) {
  return 0.008 * ex(x);
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  y = sample_signal(noise_coif);
  fourierY = dft(y);
  strokeWeight(2);
}

function draw() {
  background(0);
  translate(250, 0);
  let x = 0;
  let y = 0;

  for (let i = fourierY.length - 1; i >= 0; i--) {
    let prevx = x;
    let prevy = y;

    let freq = fourierY[i].freq;
    let amp = fourierY[i].amp;
    let phase = fourierY[i].phase;

    if (do_filtering && abs(amp) <= filter_value)
      continue;

    x += amp * cos(freq * time + phase + HALF_PI);
    y += amp * sin(freq * time + phase + HALF_PI);

    stroke(255, 100);
    noFill();
    ellipse(prevx, prevy + height / 2, amp * 2);

    stroke(255);
    line(prevx, prevy + height / 2, x, y + height / 2);
  }
  wave.unshift(y);

  translate(500, height / 2);
  line(x - 500, y, 0, wave[0]);
  beginShape();
  noFill();
  for (let i = 0; i < wave.length; i++) {
    vertex(i, wave[i]);
  }
  endShape();

  const dt = TWO_PI / fourierY.length;
  time += dt;

  if (wave.length > 1024) {
    wave.pop();
  }
}

function dft(values) {
  let Cs = [];
  const N = values.length;

  for (let k = 0; k < N; k++) {
    let re = 0;
    let im = 0;

    for (let n = 0; n < N; n++) {
      const dx = (TWO_PI * n) / N;
      re += values[n] * cos(k * dx);
      im -= values[n] * sin(k * dx);
    }

    //re /= N;
    //im /= N;

    let freq = k;
    let amp = sqrt(re * re + im * im);
    let phase = atan2(im, re);

    Cs[k] = { freq, amp, phase };
  }
  return Cs;
}

function sample_signal(noise_coiffecient) {
  let ar = [];
  let index = 0;
  let counter = -314;
  for (let i = 0; i < TWO_PI; i += 0.01) {
    ar[index] = f(counter) + (noise_coiffecient * noise(index));
    index++;
    counter++;
  }
  return ar;
}

function reciproc(x) {
  if (!x)
    return 0;
  return (8000 / x);
}

function tan(x) {
  return 100 * Math.tan(x / 100);
}

function trig(x) {
  return 50 * (sin(x / 10) + cos(x / 20 + HALF_PI) + sin(x / 25 + PI));
}

function ex(x) {
  return -40 * Math.exp(-x / 300);
}

