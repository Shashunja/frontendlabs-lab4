"use strict";

//TASK1

const firstP = document.getElementById("firstP");
const secondP = document.querySelector(".secondP");

const createRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const pColor = "#" + randomColor;
  return pColor;
};

const changeColor = (p, color1, color2) => {
  p.style.backgroundColor = color1;
  p.style.color = color2;
};

firstP.addEventListener("click", () => {
  changeColor(firstP, createRandomColor(), createRandomColor());
});

secondP.addEventListener("click", () => {
  changeColor(secondP, createRandomColor(), createRandomColor());
});

//TASK2

const addImg = document.getElementById("addImg");
const plusImg = document.getElementById("plusScale");
const minusImg = document.getElementById("minusScale");
const deleteImg = document.getElementById("deleteImg");

addImg.addEventListener("click", () => {
  let img = document.createElement("img");
  img.id = "addedImg";
  img.src =
    "https://naftusia.com/upload/resize_cache/iblock/933/970_648_27321a263522a972f4f3f046e66e58efb/9339f47e4364b8a5f89d6a6191976ce0.jpg";
  const src = document.getElementById("forNew");
  src.appendChild(img);
});

deleteImg.addEventListener("click", () => {
  let img = document.getElementById("addedImg");
  if (typeof img !== "undefined" && img !== null) {
    img.remove();
  } else {
    alert("Can't delete former img");
  }
});

plusImg.addEventListener("click", () => {
  func1("addedImg");
});

minusImg.addEventListener("click", () => {
  func2("addedImg");
});

const func1 = (imgId, sign) => {
  let img = document.getElementById(imgId);
  if (typeof img !== "undefined" && img !== null) {
    let currHeight = img.clientHeight;
    if (currHeight > 1000) alert("Too big already");
    else {
      img.style.height = currHeight + 15 + "px";
    }
  } else {
    let picture = document.getElementById("Picture");
    let currHeight = picture.clientHeight;
    if (currHeight > 1000) alert("Too big already");
    else {
      picture.style.height = currHeight + 15 + "px";
    }
  }
};
const func2 = (imgId) => {
  let img = document.getElementById(imgId);
  if (typeof img !== "undefined" && img !== null) {
    let currHeight = img.clientHeight;
    if (currHeight < 400) alert("Too small already");
    else {
      img.style.height = currHeight - 15 + "px";
    }
  } else {
    let picture = document.getElementById("Picture");
    let currHeight = picture.clientHeight;
    if (currHeight < 400) alert("Too small already");
    else {
      picture.style.height = currHeight - 15 + "px";
    }
  }
};