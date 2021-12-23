class Algorithms {
  constructor() {
    this.arrays = document.getElementById("arrays"); // parent div of all rectangles
    this.rectangles = this.arrays.children; // rectangle divs inside arrays div
    this.size = this.rectangles.length; // number of rectangles
    this.helpers = new Helpers(this.rectangles); // helper functions
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

        await new Promise((resolve) => setTimeout(resolve, 1)); // wait for animation

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

        await new Promise((resolve) => setTimeout(resolve, 1)); // wait for animation

        await this.helpers.removeCurrent(j);
        j--;
        key--;
      }
    }
  }

  // Merge Sort
  async MergeSort() {
    await this.MergeSplit(this.rectangles);
  }

  async MergeSplit(array) {
    if (array.length <= 1) {
      return array;
    }
    let middle = Math.floor(array.length / 2);
    let leftArr = [];
    let rightArr = [];
    for (let i = 0; i < middle; i++) {
      leftArr.push(array[i]);
    }
    for (let i = middle; i < this.size; i++) {
      rightArr.push(array[i]);
    }

    await this.MergeSplit(leftArr);
    await this.MergeSplit(rightArr);
    await this.Merge(leftArr, rightArr);
  }

  async Merge(leftArr, rightArr) {
    let i = 1;
    console.log(i++);
  }

  // Selection Sort
  async SelectionSort() {
    for (let i = 0; i < this.size; i++) {
      let min = i;
      for (let j = i + 1; j < this.size; j++) {
        if (await this.helpers.compareElements(min, j)) {
          min = j;
        }
      }
      await this.helpers.setCurrent(i);
      await this.helpers.setCurrent(min);

      await new Promise((resolve) => setTimeout(resolve, 1)); // wait for animation

      await this.helpers.swapElements(i, min);
      await this.helpers.removeCurrent(i);
      await this.helpers.removeCurrent(min);
    }
  }
}
