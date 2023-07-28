import { mainProjects } from "/data/projects.js";
import { createElement } from "/scripts/util.js";

function generateProjects() {
  const cardHolder = document.getElementById("card-holder");

  // Get all available types and create row for each
  mainProjects.forEach((type) => {
    let columns = createElement("div", { classes: ["columns"] });
    // Create a card for each project
    type.projects.forEach((project, i) => {
      if (i % 3 === 0) {
        cardHolder.appendChild(columns);
        columns = createElement("div", { classes: ["columns"] });
      }
      generateCard(project, columns);
    });

    // Append all blogs
    cardHolder.appendChild(columns);
  });
}

function generateCard(project, columns) {
  const column = createElement("div", { classes: ["column", "is-4"] });
  const card = createElement("a", { classes: ["card", "box"] });
  card.href = project.path;

  const cardContent = createElement("div", { classes: ["card-content"] });
  const content = createElement("div", { classes: ["content"] });
  const title = createElement("h3");
  title.innerHTML = project.title;
  content.appendChild(title);
  const tagContainer = createElement("div", { classes: ["tag-container"] });
  project.tech.forEach((techTag) => {
    let tagElement = createElement("span", {
      classes: ["tag", "is-info"],
    });
    tagElement.innerHTML = techTag;
    tagContainer.appendChild(tagElement);
  });

  content.appendChild(tagContainer);
  cardContent.appendChild(content);
  card.appendChild(cardContent);
  column.appendChild(card);
  columns.appendChild(column);
}

generateProjects();
