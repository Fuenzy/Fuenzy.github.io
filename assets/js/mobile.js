function adjustQuoteFontSize() {
  const aboutQuote = document.querySelector(".basic-infos p");
  if (aboutQuote) {
    const screenWidth = window.innerWidth;
    aboutQuote.style.fontSize = screenWidth < 768 ? "1rem" : "1.2rem";
  }
}

// Adjust font size on load and resize
window.addEventListener("load", adjustQuoteFontSize);
window.addEventListener("resize", adjustQuoteFontSize);