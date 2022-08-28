const left = document.getElementById("left");
const right = document.getElementById("right");
const slide = document.querySelectorAll(".slide");
const slide_items_box = document.querySelectorAll(".slide_item_box");

let x = 0;

let y = -200;
// setInterval(function () {
//   right.click();
// }, 10000);

// console.log(parseInt(Math.abs(y).toString().split("")[0]));

// slide_items_box[0].style.transform = `translateY(0%)

slide_items_box[0].style.transform = `translateY(-50%)`;

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
    slide[t - 1].style.opacity = "20%";
    slide[t + 1].style.opacity = "20%";
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
