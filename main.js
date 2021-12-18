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

async function bubbleSort() {
  const arrays = document.getElementById("arrays");
  const children = arrays.children;
  for (let i = 0; i < children.length - 1; i++) {
    for (let j = 0; j < children.length - i - 1; j++) {
      children[j].style.background = "red";
      children[j + 1].style.background = "red";
      height1 = Number(children[j].style.height.match(/(\d+)/)[0]);
      height2 = Number(children[j + 1].style.height.match(/(\d+)/)[0]);

      if (height1 > height2) {
        children[j].style.height = String(height2) + "px";
        children[j + 1].style.height = String(height1) + "px";
      }

      await new Promise((resolve) => setTimeout(resolve, 1));

      children[j].style.background = "black";
      children[j + 1].style.background = "black";
    }
  }
}

async function insertionSort() {
  const arrays = document.getElementById("arrays");
  const children = arrays.children;

  for (let i = 1; i < children.length; i++) {
    let j = i - 1; // j is the index of the previous element
    let key = i;

    while (
      j >= 0 &&
      Number(children[j].style.height.match(/(\d+)/)[0]) >
        Number(children[key].style.height.match(/(\d+)/)[0])
    ) {
      children[j].style.background = "red";
      height1 = Number(children[j].style.height.match(/(\d+)/)[0]);
      height2 = Number(children[key].style.height.match(/(\d+)/)[0]);
      //swap
      children[key].style.height = String(height1) + "px";
      children[j].style.height = String(height2) + "px";

      await new Promise((resolve) => setTimeout(resolve, 1));
      children[j].style.background = "black";
      j--;
      key--;
    }
  }
}

async function mergeSort() {}
