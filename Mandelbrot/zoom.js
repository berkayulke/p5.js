function zoom_in(change_value) {
  let mult_by = 1 - change_value;
  map_x_start *= mult_by;
  map_x_end *= mult_by;
  map_y_start *= mult_by;
  map_y_end *= mult_by;
}

function go_left(change_value) {
  x_minus -= change_value;
}
function go_right(change_value) {
  x_minus += change_value;
}
function go_bot(change_value) {
  y_minus += change_value;
}
function go_top(change_value) {
  y_minus -= change_value;
}
