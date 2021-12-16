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
