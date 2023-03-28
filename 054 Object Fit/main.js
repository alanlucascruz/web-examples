const buttonFill = document.querySelector("#btn-fill");
const buttonContain = document.querySelector("#btn-contain");
const buttonCover = document.querySelector("#btn-cover");

const carImage = document.querySelector("#car-image");

buttonFill.addEventListener("click", () => {
  carImage.style.objectFit = "fill";
});

buttonContain.addEventListener("click", () => {
  carImage.style.objectFit = "contain";
});

buttonCover.addEventListener("click", () => {
  carImage.style.objectFit = "cover";
});
