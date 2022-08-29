const left = document.getElementById("left");
const right = document.getElementById("right");
const slide = document.querySelectorAll(".slide");
const slide_items_box = document.querySelectorAll(".slide_item_box");

let x = 0;
let y = -200;
slide_items_box[0].style.transform = `translateY(-50%)`;

// setInterval(function () {
//   right.click();
// }, 10000);

let posX1;
let posX2;
let initialposition;
let finalposition;

const dragStart = (e) => {
  e.preventDefault();
  for (let i = 0; i < slide.length; i++) {
    initialposition = slide[i].offsetLeft;
  }

  if (e.type === "touchstart") {
    posX1 = e.touches[0].clientX;
  } else {
    posX1 = e.clientX;

    document.onmouseup = dragEnd;
    document.onmousemove = dragMove;
  }
};

const dragMove = (e) => {
  if (e.type === "touchmove") {
    posX2 = posX1 - e.touches[0].clientX;
    posX1 = e.touches[0].clientX;
  } else {
    posX2 = posX1 - e.clientX;
    posX1 = e.clientX;
  }

  for (let i = 0; i < slide.length; i++) {
    slide[i].style.left = `${slide[i].offsetLeft - posX2}px `;
  }
};
const dragEnd = () => {
  finalposition = slide[0].offsetLeft;
  if (finalposition - initialposition < 400) {
    right.click();
  } else if (finalposition - initialposition > 500) {
    left.click();
  } else {
    for (let i = 0; i < slide.length; i++) {
      slide[i].slide.left = `${initialposition}px`;
    }
  }

  document.onmouseup = null;
  document.onmousemove = null;
};

slide[0].addEventListener("mousedown", dragStart);
slide[0].addEventListener("touchstart", dragStart);
slide[0].addEventListener("touchmove", dragMove);
slide[0].addEventListener("touchend", dragEnd);

left.addEventListener("click", () => {
  if (x === 0) {
    for (let i = 0; i < slide.length; i++) {
      slide[i].style.setProperty(
        "transform",
        `translateX(-${slide.length - 1}00% )`
      );

      // slide[i].style.transform = `translateX(-${slide.length - 1}00% )`;
    }
    x = parseInt(`-${slide.length - 1}00`);
    textopening();
  } else if (x === -100) {
    for (let i = 0; i < slide.length; i++) {
      slide[i].style.transform = `translateX(0%)`;
    }
    x = 0;
    textopening();
  } else {
    x += 100;
    for (let i = 0; i < slide.length; i++) {
      slide[i].style.setProperty("transform", `translateX(${x}% )`);
      // slide[i].style.transform = `translateX(${x}%)`;
    }
    textopening();
  }
});

right.addEventListener("click", () => {
  if (x === parseInt(`-${slide.length - 1}00`)) {
    for (let i = 0; i < slide.length; i++) {
      slide[i].style.transform = `translateX(0%)`;
    }
    x = 0;
    textopening();
  } else {
    x -= 100;
    for (let i = 0; i < slide.length; i++) {
      slide[i].style.setProperty("transform", `translateX(${x}%   )`);
    }

    textopening();
  }
});

const textopening = () => {
  let t = parseInt(Math.abs(x).toString().split("")[0]);

  //hide other slides
  try {
    slide[t - 1].style.opacity = "10%";
    slide[t + 1].style.opacity = "10%";
  } catch (error) {
    console.log(error);
  }

  //text show
  slide_items_box[t].style.transform = `translateY(0%)`;
  slide_items_box[t].style.transition = `none`;
  slide_items_box[t].style.opacity = "0%";

  setTimeout(() => {
    slide[t].style.opacity = "100%";
  }, 10);

  setTimeout(() => {
    slide_items_box[t].style.transition = `all 0.9s 0s ease`;
    slide_items_box[t].style.transform = `translateY(-50%)`;
    slide_items_box[t].style.opacity = "100%";
  }, 500);
};
