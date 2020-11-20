var toggle = true;
const changeBackground = () => {
  if (toggle) {
    document.body.style.backgroundColor = "red";
  } else {
    document.body.style.backgroundColor = "blue";
  }
  toggle = !toggle;
};

const btn = document.getElementById("butt");

btn.addEventListener("click", changeBackground);
