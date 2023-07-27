import { mainBlogs } from "/data/blogs.js";
import { createElement } from "/scripts/util.js";

function generateBlogs() {
  const cardHolder = document.getElementById("card-holder");

  // Get all available blog types and create row for each
  mainBlogs.forEach((blogType) => {
    // Add title for blog type
    // const title = createElement("div", {
    //   classes: ["title", "has-text-dark", "has-text-centered"],
    // });
    // title.innerHTML = blogType.type;
    // cardHolder.appendChild(title);

    let columns = createElement("div", { classes: ["columns"] });
    // Create a card for each blog
    blogType.blogs.forEach((blog, i) => {
      if (i % 3 === 0) {
        cardHolder.appendChild(columns);
        columns = createElement("div", { classes: ["columns"] });
      }
      generateCard(blog, columns);
    });

    // Append all blogs
    cardHolder.appendChild(columns);
  });
}

function generateCard(blog, columns) {
  const column = createElement("div", { classes: ["column", "is-4"] });
  const card = createElement("a", { classes: ["card", "box"] });
  card.href = blog.path;

  const cardImage = createElement("div", { classes: ["card-image"] });
  const figure = createElement("figure", { classes: ["image", "is-2by1"] });
  const img = createElement("img");

  img.src = blog.image;

  figure.appendChild(img);
  cardImage.appendChild(figure);
  card.appendChild(cardImage);

  const cardContent = createElement("div", { classes: ["card-content"] });
  const content = createElement("div", { classes: ["content"] });
  const title = createElement("span");
  const subtitle = createElement("span");

  title.innerHTML = blog.title;
  subtitle.innerHTML = blog.subtitle;
  content.appendChild(title);
  content.appendChild(createElement("br"));
  content.appendChild(subtitle);

  cardContent.appendChild(content);
  card.appendChild(cardContent);
  column.appendChild(card);
  columns.appendChild(column);
}

generateBlogs();
