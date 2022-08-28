const left = document.getElementById("left");
const right = document.getElementById("right");
const slide = document.querySelectorAll(".slide");
const slide_items_box = document.querySelectorAll(".slide_item_box");

let x = 0;
let y = 0;

// console.log(parseInt(Math.abs(y).toString().split("")[0]));

// slide_items_box[0].style.transform = `translateY(-50%)`;

left.addEventListener("click", () => {
  console.log(x);

  if (x === 0) {
    for (let i = 0; i < slide.length; i++) {
      slide[i].style.transform = `translateX(-${slide.length - 1}00%)`;
    }
    x = parseInt(`-${slide.length - 1}00`);
  } else {
    x += 100;
    slide_items_box[i].style.transform = `translateY(200%)`;
    for (let i = 0; i < slide.length; i++) {
      slide[i].style.transform = `translateX(${x}%)`;
      slide_items_box[i].style.transform = `translateY(-50%)`;
    }
  }
});

right.addEventListener("click", () => {
  console.log(x);

  if (x === parseInt(`-${slide.length - 1}00`)) {
    for (let i = 0; i < slide.length; i++) {
      slide[i].style.transform = `translateX(0%)`;
    }
    x = 0;
  } else {
    x -= 100;
    for (let i = 0; i < slide.length; i++) {
      slide[i].style.transform = `translateX(${x}%)`;
    }
  }
});
