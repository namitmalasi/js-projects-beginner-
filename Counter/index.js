const btninc = document.getElementById("button-inc");
const btndec = document.getElementById("button-dec");
const div = document.getElementById("counter");

const incrementCounter = () => {
  div.innerHTML++;
};

const decrementCounter = () => {
  div.innerHTML--;
};

btninc.addEventListener("click", incrementCounter);
btndec.addEventListener("click", decrementCounter);
