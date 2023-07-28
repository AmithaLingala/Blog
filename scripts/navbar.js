  // Get all "navbar-burger" elements
const navbarBurgers = document.querySelectorAll(".navbar-burger");

// Check if there are any navbar burgers
if (navbarBurgers.length > 0) {
  // Add a click event on each of them
  navbarBurgers.forEach((element) => {
    element.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = document.getElementById(element.dataset.target);
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      element.classList.toggle("is-active");
      target.classList.toggle("is-active");
    });
  });
}
