function togglePopup(popupId) {
  const activePopup = document.querySelector('.popup.active');
  const newPopup = document.getElementById(popupId);

  if (activePopup) {
    activePopup.classList.remove('active');
    activePopup.classList.add('hidden');
  }

  if (newPopup) {
    newPopup.classList.remove('hidden');
    newPopup.classList.add('active');
    document.body.classList.add('popup-active');
  } else {
    document.body.classList.remove('popup-active');
  }
}

document.querySelectorAll('.popup-trigger').forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    togglePopup(button.dataset.popup);
  });
});

document.querySelectorAll('.close-popup').forEach(button => {
  button.addEventListener('click', () => {
    const activePopup = document.querySelector('.popup.active');
    if (activePopup) {
      activePopup.classList.remove('active');
      activePopup.classList.add('hidden');
      document.body.classList.remove('popup-active');
    }
  });
});
const navbarLinks = document.querySelectorAll(".navbar a");

// Add 'selected' class to the clicked navbar link
navbarLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Remove 'selected' class from all navbar items
    navbarLinks.forEach((item) =>
      item.parentElement.classList.remove("selected")
    );

    // Add 'selected' class to the clicked navbar item
    link.parentElement.classList.add("selected");
  });
});

// Remove 'selected' class when closing a popup
document.querySelectorAll(".close-popup").forEach((button) => {
  button.addEventListener("click", () => {
    navbarLinks.forEach((item) =>
      item.parentElement.classList.remove("selected")
    );
  });
});
