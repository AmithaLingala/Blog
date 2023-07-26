import { createElement } from "/scripts/util.js";
import { nav } from "/data/nav.js";

const navbar = document.getElementById("navbar");

nav.forEach((item, i) => {
  const navItem = createElement("a", {
    classes: ["navbar-item"],
    attributes: [{ name: "href", value: item.url }],
  });

  const icon = createElement("span", {
    classes: ["nav-icon"],
    attributes: [{ name: "aria-hidden", value: true }],
  });

  icon.appendChild(document.createTextNode(item.icon));
  navItem.appendChild(icon);
  navItem.appendChild(document.createTextNode(item.name));

  if (item.isNewTab) {
    navItem.target = "_blank";
  }
  navbar.appendChild(navItem);
});

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});
