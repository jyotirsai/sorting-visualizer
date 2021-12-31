document.addEventListener("DOMContentLoaded", generateArray(), false); // Generate a random array when window loads

// Function to generate array of rectangles
function generateArray() {
  const arrays = document.getElementById("arrays"); // retrieve parent div of rectangles
  arrays.innerHTML = ""; // clear any div children within arrays

  for (let i = 0; i < 50; i++) {
    const rectangle = document.createElement("div"); // create a div element which will represent each rectangle
    rectangle.id = "rectangle"; // set id
    rectangle.classList.add("default"); // add css class
    const height = Math.floor(Math.random() * 500); // generate random size for rectangle
    rectangle.style.height = height + "px"; // add previously generated size to height properties of style
    arrays.appendChild(rectangle); // add div to arrays parent div
  }
}

async function bubbleSort() {
  let algorithms = new Algorithms();
  await algorithms.BubbleSort();
}

async function insertionSort() {
  let algorithms = new Algorithms();
  await algorithms.InsertionSort();
}

async function selectionSort() {
  let algorithms = new Algorithms();
  await algorithms.SelectionSort();
}

async function mergeSort() {
  let algorithms = new Algorithms();
  await algorithms.MergeSort();
}

/*

// Merge sort functions
async function setUpMergeSort() {
  const arrays = document.getElementById("arrays");
  const children = [...arrays.children];
  let rectangleDivs = arrays.children;
  let sorted = mergeSort(children);
  let heights = [];
  for (let i = 0; i < sorted.length; i++) {
    heights.push(sorted[i].style.height);
  }
  for (let i = 0; i < heights.length; i++) {
    rectangleDivs[i].style.height = heights[i];
  }
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const leftArr = array.splice(0, middle);
  const rightArr = array;

  // recursively call function to further split and sort arrays
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  let sorted = [];

  while (leftArr.length && rightArr.length) {
    leftArr[0].style.background = "red";
    rightArr[0].style.background = "red";
    if (
      Number(leftArr[0].style.height.match(/(\d+)/)[0]) <
      Number(rightArr[0].style.height.match(/(\d+)/)[0])
    ) {
      leftArr[0].style.background = "black";
      rightArr[0].style.background = "black";
      sorted.push(leftArr.shift());
    } else {
      leftArr[0].style.background = "black";
      rightArr[0].style.background = "black";
      sorted.push(rightArr.shift());
    }
  }

  return [...sorted, ...leftArr, ...rightArr];
} */
