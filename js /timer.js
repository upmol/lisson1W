export const c = 0;
export const t;
export const timer_is_on = 0;

function timedCount() {
  document.getElementById("txt").value = c;
  c = c + 1;
  t = setTimeout("timedCount()", 1000);
}

function doTimer() {
  if (!timer_is_on) {
    timer_is_on = 1;
    timedCount();
  }
}

function stopCount() {
  clearTimeout(t);
  timer_is_on = 0;
}

export default timedCount;
export default doTimer;
export default stopCount;
