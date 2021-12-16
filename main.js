document.addEventListener("DOMContentLoaded", randomizeArray(), false);

function randomizeArray() {
  const arrays = document.getElementById("arrays");
  arrays.innerHTML = "";

  for (let i = 0; i < 50; i++) {
    const arrays = document.getElementById("arrays");
    const rectangle = document.createElement("div");
    rectangle.id = "rectangle";
    rectangle.classList.add("default");
    const height = Math.floor(Math.random() * 500);
    rectangle.style.height = height + "px";
    arrays.appendChild(rectangle);
  }
}

function bubbleSort() {
  const arrays = document.getElementById("arrays");
  const children = arrays.children;
  for (let i = 0; i < children.length - 1; i++) {
    height1 = Number(children[i].style.height.match(/(\d+)/)[0]);
    height2 = Number(children[i + 1].style.height.match(/(\d+)/)[0]);

    if (height1 > height2) {
      children[i].style.height = String(height2) + "px";
      children[i + 1].style.height = String(height1) + "px";
    }
  }
  for (let i = 0; i < children.length; i++) {
    console.log(children[i].style.height);
  }
}
