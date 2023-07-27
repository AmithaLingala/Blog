import { comics } from "/data/comics.js";
import { createElement } from "/scripts/util.js";

function generateComics() {
  const cardHolder = document.getElementById("card-holder");
  const modalClose = document.getElementById("modal-close");
  const modalContainer = document.getElementById("modal-container");
  const modalBackground = document.getElementById("modal-background");

  // Close event for modal dialog
  modalClose.onclick = () => {
    closeModal(modalContainer);
  };

  modalBackground.addEventListener("click", function (event) {
    if (this === event.target) {
      closeModal(modalContainer);
    }
  });

  let columns = createElement("div", { classes: ["columns"] });
  // Create a card for each comic
  comics.forEach((comic, i) => {
    if (i % 4 === 0) {
      cardHolder.appendChild(columns);
      columns = createElement("div", { classes: ["columns"] });
    }
    generateCard(comic, columns);
  });
  // Append all comics
  cardHolder.appendChild(columns);
}

function generateCard(comic, columns) {
  const column = createElement("div", { classes: ["column", "is-3"] });
  const card = createElement("div", { classes: ["card", "box"] });

  const cardImage = createElement("div", { classes: ["card-image"] });
  const figure = createElement("div", { classes: ["image"] });
  const img = createElement("img", {
    attributes: [{ name: "src", value: comic.image }],
  });

  img.style.cursor = "pointer";

  // Show image in modal dialog on click for expanded view
  img.onclick = () => {
    openModal(img);
  };

  figure.appendChild(img);
  cardImage.appendChild(figure);
  card.appendChild(cardImage);

  const cardContent = createElement("div", { classes: ["card-content"] });
  const content = createElement("div", { classes: ["content"] });
  const author = createElement("p", { classes: ["subtitle"] });
  const link = createElement("a", {
    attributes: [
      { name: "href", value: comic.credit.link },
      { name: "target", value: "_blank" },
    ],
  });

  link.appendChild(document.createTextNode("Comic Source"));
  author.innerHTML = `Thank you <strong>${comic.credit.author}</strong> for the comic!`;

  content.appendChild(author);
  content.appendChild(link);

  cardContent.appendChild(content);
  card.appendChild(cardContent);
  column.appendChild(card);
  columns.appendChild(column);
}

function openModal(img) {
  const modalImage = document.getElementById("modal-image");
  const modalContainer = document.getElementById("modal-container");
  modalContainer.classList.add("is-active");
  modalImage.src = img.src;
}

function closeModal(modalContainer) {
  modalContainer.classList.remove("is-active");
}

generateComics();
