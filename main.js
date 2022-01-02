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
  await disableButtons();
  let algorithms = new Algorithms();
  await algorithms.BubbleSort();
  await enableButtons();
}

async function insertionSort() {
  await disableButtons();
  let algorithms = new Algorithms();
  await algorithms.InsertionSort();
  await enableButtons();
}

async function selectionSort() {
  await disableButtons();
  let algorithms = new Algorithms();
  await algorithms.SelectionSort();
  await enableButtons();
}

async function mergeSort() {
  await disableButtons();
  let algorithms = new Algorithms();
  await algorithms.MergeSort();
  await enableButtons();
}

async function disableButtons() {
  document.getElementById("arrayBtn").disabled = true;
  document.getElementById("bubbleSortBtn").disabled = true;
  document.getElementById("insertionSortBtn").disabled = true;
  document.getElementById("selectionSortBtn").disabled = true;
  document.getElementById("mergeSortBtn").disabled = true;
}

async function enableButtons() {
  document.getElementById("arrayBtn").disabled = false;
  document.getElementById("bubbleSortBtn").disabled = false;
  document.getElementById("insertionSortBtn").disabled = false;
  document.getElementById("selectionSortBtn").disabled = false;
  document.getElementById("mergeSortBtn").disabled = false;
}
