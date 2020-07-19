import {mainBlogs} from '/data/blogs.js'

function generateBlogs() {
  const cardHolder = document.getElementById('card-holder');
  let columns = createElement('div', ['columns']);
  mainBlogs.forEach((blog, i) => {
    generateCard(blog, columns);
  });
  cardHolder.appendChild(columns);
}

function generateCard(blog, columns) {
  const column = createElement('div', ['column']);
  const card = createElement('a', ['card','box']);
  card.href = blog.path;

  const cardImage = createElement('div', ['card-image']);
  const figure = createElement('div', ['image','is-2by1']);
  const img = createElement('img',[]);

  img.src =blog.image;

  figure.appendChild(img);
  cardImage.appendChild(figure);
  card.appendChild(cardImage);

  const cardContent = createElement('div', ['card-content']);
  const content = createElement('div', ['content']);
  const title = createElement('span', []);
  const subtitle = createElement('span', []);

  title.innerHTML = blog.title;
  subtitle.innerHTML = blog.subtitle;
  content.appendChild(title);
  content.appendChild(createElement('br',[]));
  content.appendChild(subtitle);

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
generateBlogs();
