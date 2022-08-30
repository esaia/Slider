const left = document.getElementById("left");
const right = document.getElementById("right");
const slide = document.querySelectorAll(".slide");
const main_div = document.querySelectorAll(".main_div")[0];
const slide_items_box = document.querySelectorAll(".slide_item_box");
let x = 0;
let t = parseInt(Math.abs(x).toString().split("")[0]);

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

  initialposition = slide[t].offsetLeft;

  if (e.type === "touchstart") {
    posX1 = e.touches[0].clientX;
  } else {
    posX1 = e.clientX;
    document.onmouseup = dragEnd;
    document.onmousemove = dragMove;
  }
  //   console.log(main_div.offsetLeft);
  //   console.log(main_div.clientWidth);
};

const dragMove = (e) => {
  if (e.type == "touchmove") {
    posX2 = posX1 - e.touches[0].clientX;
    posX1 = e.touches[0].clientX;
  } else {
    posX2 = posX1 - e.clientX;
    posX1 = e.clientX;
  }

  slide[t].style.left = `${-posX2 * 7}px`;
};
const dragEnd = (e) => {
  console.log(slide[t].style.left);

  if (parseInt(slide[t].style.left) < -15) {
    right.click();
  } else if (parseInt(slide[t].style.left) > 15) {
    left.click();
  } else {
    slide[t].style.left = `0px`;
  }

  slide[t].style.left = `0px`;

  document.onmouseup = null;
  document.onmousemove = null;
  slide[t].addEventListener("mousedown", dragStart);
  slide[t].addEventListener("touchstart", dragStart);
  slide[t].addEventListener("touchmove", dragMove);
  slide[t].addEventListener("touchend", dragEnd);
};

slide[t].addEventListener("mousedown", dragStart);
slide[t].addEventListener("touchstart", dragStart);
slide[t].addEventListener("touchmove", dragMove);
slide[t].addEventListener("touchend", dragEnd);

left.addEventListener("click", () => {
  if (x === 0) {
    for (let i = 0; i < slide.length; i++) {
      slide[i].style.transform = `translateX(-${slide.length - 1}00% )`;
    }
    x = parseInt(`-${slide.length - 1}00`);
    textopening();
  } else {
    x += 100;
    for (let i = 0; i < slide.length; i++) {
      //   slide[i].style.setProperty("transform", `translateX(${x}% )`);
      slide[i].style.transform = `translateX(${x}%)`;
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
      slide[i].style.transform = `translateX(${x}%)`;
    }

    textopening();
  }
});

const textopening = () => {
  t = parseInt(Math.abs(x).toString().split("")[0]);
  //hide other slides
  try {
    slide[t - 1].style.opacity = "10%";
    slide[t + 1].style.opacity = "10%";
  } catch (error) {
    console.log(error);
    slide[t].style.opacity = "100%";
    slide[1].style.opacity = "10%";
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
