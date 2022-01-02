class Helpers {
  constructor(rectangles = []) {
    this.rectangles = rectangles; // rectangle divs
  }

  // indicate current rectangle(s)
  async setCurrent(i) {
    this.rectangles[i].classList.remove("default");
    this.rectangles[i].classList.add("current");
  }

  // set rectangle(s) to default color
  async removeCurrent(i) {
    this.rectangles[i].classList.remove("current");
    this.rectangles[i].classList.add("default");
  }

  // compare the heights of 2 different rectangles
  async compareElements(i, j) {
    let height1 = Number(this.rectangles[i].style.height.match(/(\d+)/)[0]);
    let height2 = Number(this.rectangles[j].style.height.match(/(\d+)/)[0]);
    if (height1 > height2) {
      return true;
    } else {
      return false;
    }
  }

  // swap the height values of two elements
  async swapElements(i, j) {
    let height1 = Number(this.rectangles[i].style.height.match(/(\d+)/)[0]);
    let height2 = Number(this.rectangles[j].style.height.match(/(\d+)/)[0]);
    this.rectangles[i].style.height = height2 + "px";
    this.rectangles[j].style.height = height1 + "px";
  }

  // delay for animation
  async delay(time) {
    await new Promise((resolve) => setTimeout(resolve, time)); // wait for animation
  }
}
