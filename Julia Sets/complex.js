class Inumber {
  constructor(re, im) {
    this.re = re;
    this.im = im;
  }

  square() {
    let re = this.re;
    let im = this.im;
    let real_part = re * re - im * im;
    let imag_part = 2 * re * im;
    return new Inumber(real_part, imag_part);
  }

  add(number) {
    return new Inumber(this.re + number.re, this.im + number.im);
  }

  print() {
    return this.re.toFixed(2) + "+" + this.im.toFixed(2) + "i";
  }

  copy() {
    return new Inumber(this.re, this.im);
  }

  // if julia constant is equal to number itself it will be Mandlbrot set
  is_in_set(julia) {
    let counter = 0;
    let z = this.copy();
    while (counter < max_itterations) {
      z = z.square().add(julia);
      if (z.re * z.re + z.im * z.im > inf) {
        return false;
      }
      counter++;
    }
    return true;
  }
}
function get_mandelbrot_numbers() {
  let array = [];
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
      if (c.is_in_set(c)) {
        array.push(c);
        bright = 255;
      }

      var pix = (x + y * width) * 4;
      pixels[pix + 0] = bright;
      pixels[pix + 1] = bright;
      pixels[pix + 2] = bright;
      pixels[pix + 3] = 255;
    }
  }
  return array;
}
