const headerScroll = () => {
  const header = document.querySelector(".header");
  
  document.addEventListener("scroll", () => {
    const scroll_position = window.scrollY;
    if (scroll_position > 20) {
      if (document.body.classList.contains("light-mode")) {
        header.style.backgroundColor = "#f1f5f9";
      } else {
        header.style.backgroundColor = "#020617";
      }
    } else {
      header.style.backgroundColor = "transparent";
    }
  });
}

export default headerScroll