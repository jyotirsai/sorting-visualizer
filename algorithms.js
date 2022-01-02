class Algorithms {
  constructor() {
    this.arrays = document.getElementById("arrays"); // parent div of all rectangles
    this.rectangles = this.arrays.children; // rectangle divs inside arrays div
    this.size = this.rectangles.length; // number of rectangles
    this.helpers = new Helpers(this.rectangles); // helper functions
    this.speed = document.getElementById("speed").value;
  }

  // Bubble Sort
  async BubbleSort() {
    for (let i = 0; i < this.size - 1; i++) {
      for (let j = 0; j < this.size - i - 1; j++) {
        await this.helpers.setCurrent(j);
        await this.helpers.setCurrent(j + 1);
        if (await this.helpers.compareElements(j, j + 1)) {
          await this.helpers.swapElements(j, j + 1);
        }

        await this.helpers.delay(this.speed);

        await this.helpers.removeCurrent(j);
        await this.helpers.removeCurrent(j + 1);
      }
    }
  }

  // Insertion Sort
  async InsertionSort() {
    for (let i = 1; i < this.size; i++) {
      let j = i - 1;
      let key = i;

      while (j >= 0 && (await this.helpers.compareElements(j, key))) {
        await this.helpers.setCurrent(j);
        await this.helpers.swapElements(key, j);

        await this.helpers.delay(this.speed);

        await this.helpers.removeCurrent(j);
        j--;
        key--;
      }
    }
  }

  // Selection Sort
  async SelectionSort() {
    for (let i = 0; i < this.size; i++) {
      let min = i;
      for (let j = i + 1; j < this.size; j++) {
        await this.helpers.setCurrent(j);
        await this.helpers.delay(this.speed);
        if (await this.helpers.compareElements(min, j)) {
          min = j;
        }
        await this.helpers.removeCurrent(j);
      }
      await this.helpers.setCurrent(i);
      await this.helpers.setCurrent(min);

      await this.helpers.delay(this.speed);

      await this.helpers.swapElements(i, min);
      await this.helpers.removeCurrent(i);
      await this.helpers.removeCurrent(min);
    }
  }

  // Merge Sort
  async MergeSort() {
    let start = 0;
    let end = this.size - 1;
    await this.MergeSplit(start, end);
  }

  async MergeSplit(start, end) {
    if (start < end) {
      let mid = Math.floor((start + end) / 2);
      let leftArrStart = start;
      let leftArrEnd = mid;
      let rightArrStart = mid + 1;
      let rightArrEnd = end;
      await this.MergeSplit(start, mid);
      await this.MergeSplit(mid + 1, end);
      await this.Merge(leftArrStart, leftArrEnd, rightArrStart, rightArrEnd);
    }
  }

  async Merge(leftArrStart, leftArrEnd, rightArrStart, rightArrEnd) {
    let leftIndices = [];
    let rightIndices = [];
    for (let i = leftArrStart; i <= leftArrEnd; i++) {
      leftIndices.push(i);
    }
    for (let i = rightArrStart; i <= rightArrEnd; i++) {
      rightIndices.push(i);
    }
    let leftIndex = 0;
    let rightIndex = 0;
    let sortedIndices = [];
    while (leftIndex < leftIndices.length && rightIndex < rightIndices.length) {
      if (
        await this.helpers.compareElements(
          rightIndices[rightIndex],
          leftIndices[leftIndex]
        )
      ) {
        sortedIndices.push(leftIndices[leftIndex++]);
      } else {
        sortedIndices.push(rightIndices[rightIndex++]);
      }
    }

    while (leftIndex < leftIndices.length) {
      sortedIndices.push(leftIndices[leftIndex++]);
    }

    while (rightIndex < rightIndices.length) {
      sortedIndices.push(rightIndices[rightIndex++]);
    }

    let newHeights = [];
    for (let i = 0; i < sortedIndices.length; i++) {
      newHeights.push(
        Number(this.rectangles[sortedIndices[i]].style.height.match(/(\d+)/)[0])
      );
    }
    for (let i = leftArrStart; i <= rightArrEnd; i++) {
      this.helpers.setCurrent(i);
    }
    for (
      let i = leftArrStart, current = 0;
      i <= rightArrEnd && current < newHeights.length;
      i++, current++
    ) {
      await this.helpers.delay(this.speed);
      this.rectangles[i].style.height = newHeights[current] + "px";
    }
    for (let i = leftArrStart; i <= rightArrEnd; i++) {
      this.helpers.removeCurrent(i);
    }
  }
}
