const image = document.querySelector("img");

const onChangeAspectRatioRadioButton = (radioButton) => {
  image.classList = "";
  image.classList.add(radioButton.value);
};
