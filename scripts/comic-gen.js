import { comics } from '/data/comics.js'

function generateComics() {
  const cardHolder = document.getElementById('card-holder');
  const modalClose = document.getElementById('modal-close');
  // Close event for modal dialog
  modalClose.onclick = () => {
    const modalContainer = document.getElementById('modal-container');
    modalContainer.classList.remove('is-active');
  }

  let columns = createElement('div', ['columns']);
  // Create a card for each comic
  comics.forEach((comic, i) => {
    if (i % 4 === 0) {
      cardHolder.appendChild(columns);
      columns = createElement('div', ['columns']);
    }
    generateCard(comic, columns);
  });
  // Append all comics
  cardHolder.appendChild(columns);
}

function generateCard(comic, columns) {
  const column = createElement('div', ['column', 'is-3']);
  const card = createElement('div', ['card', 'box']);

  const cardImage = createElement('div', ['card-image']);
  const figure = createElement('div', ['image']);
  const img = createElement('img', []);

  img.src = comic.image;
  img.style.cursor = 'pointer';

  // Show image in modal dialog on click for expanded view
  img.onclick = () => {
   // console.log("uwu");
    const modalImage = document.getElementById('modal-image');
    const modalContainer = document.getElementById('modal-container');
    modalContainer.classList.add('is-active');
    modalImage.src = img.src;
  }

  figure.appendChild(img);
  cardImage.appendChild(figure);
  card.appendChild(cardImage);

  const cardContent = createElement('div', ['card-content']);
  const content = createElement('div', ['content']);
  const author = createElement('span', []);
  const gap = createElement('br', []);
  const link = createElement('a', []);

  author.innerHTML = `Thank you <strong>${comic.credit.author}</strong> for the comic!`;
  link.innerHTML = 'Comic Source';
  link.href = comic.credit.link;
  link.target = '_black';
  content.appendChild(author);
  content.appendChild(gap);
  content.appendChild(link);

  cardContent.appendChild(content);
  card.appendChild(cardContent);
  column.appendChild(card);
  columns.appendChild(column);
}

function createElement(element, classes) {
  let tmpElement = document.createElement(element);
  tmpElement.classList.add(...classes);
  return tmpElement;
}
generateComics();
