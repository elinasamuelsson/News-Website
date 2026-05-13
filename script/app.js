import { addArticle } from "/script/addArticle.js";
import { renderArticles } from "/script/renderArticles.js";

// render articles to index on load
renderArticles();

// display admin view
const adminButton = document.getElementById("adminButton");
const adminView = document.getElementById("adminView");

adminButton.addEventListener("click", () => {
    adminView.classList.toggle("hidden");
});

// add article
const articleForm = document.getElementById("articleForm");
articleForm.addEventListener("submit", addArticle);