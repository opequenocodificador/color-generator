/*function changeBackgroundDynamic(color) {
  (document.body.style.background = 
    let color1 = Math.floor(Math.random() * 255);

let color2 = Math.floor(Math.random() * 255);

let color3 = Math.floor(Math.random() * 255);
}*/

/*function changeBackground(color) {
  document.body.style.background = color1;
}
changeBackground;
console.log(changeBackground);

window.addEventListener("load", function () {
});*/

/*const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
};

genNew.addEventListener("load", setBg);
setBg();*/

/*const dinamycBackground = () => {
  const color1 = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + color1;
  color.innerHTML = "#" + color1;
  setInterval(dinamycBackground, 3000);
};
dinamycBackground();*/

const dinamycBackground = () => {
  const color1 = Math.floor(Math.random() * 255);
  const color2 = Math.floor(Math.random() * 255);
  const color3 = Math.floor(Math.random() * 255);
  document.body.style.backgroundColor = "#" + color1 + color2 + color3;
  color.innerHTML = "rgb" + "(" + color1 + " " + color2 + " " + color3 + ")";
  setInterval(dinamycBackground, 3000);
};
dinamycBackground();
