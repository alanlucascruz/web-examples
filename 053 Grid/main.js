const buttonGap8 = document.querySelector(".gap-8");
const buttonGap16 = document.querySelector(".gap-16");
const buttonGap16_0 = document.querySelector(".gap-16-0");
const buttonGap0_16 = document.querySelector(".gap-0-16");

const container = document.querySelector(".container");

buttonGap8.addEventListener("click", () => {
  container.style.gap = "8px";
});

buttonGap16.addEventListener("click", () => {
  container.style.gap = "16px";
});

buttonGap16_0.addEventListener("click", () => {
  container.style.gap = "16px 0";
});

buttonGap0_16.addEventListener("click", () => {
  container.style.gap = "0 16px";
});
