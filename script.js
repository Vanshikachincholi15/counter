const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const count = document.getElementById("count");
const reset = document.getElementById("reset");

let counter = 0;

increment.addEventListener("click", function () {
  counter++;
  count.innerHTML = counter;
});

decrement.addEventListener("click", function () {
  counter--;
  count.innerHTML = counter;
});

reset.addEventListener("click", function () {
  counter = 0;
  count.innerHTML = counter;
});
