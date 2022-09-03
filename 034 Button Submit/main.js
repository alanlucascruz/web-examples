const button = document.querySelector("button");

const onClick = () => {
  button.classList.add("clicked");
};

button.onclick = onClick;
