import { getAllArticlesCopy } from "/script/articles.js";
import { removeArticleFromList } from "/script/articles.js";

export function removeArticle() {
    const articles = getAllArticlesCopy();

    const articleTitle = document.querySelector("main article h3").textContent;

    const article = articles.find((article) => article.title === articleTitle);

    removeArticleFromList(article.title);

    setTimeout(() => {
        window.location.href = "index.html";
    }, 3000);
}
