const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};

document.querySelector("button").onclick = scrollToTop;
