import { updateArticle } from "/script/articles.js";
import { getAllArticlesCopy } from "/script/articles.js";

const articlesCopy = getAllArticlesCopy();

export function addLike() {
    const articleTitle = document.querySelector("h3").textContent;

    let article = articlesCopy.find((a) => a.title === articleTitle);

    ++article.likes;

    const likesParagraph = document.getElementById("likesParagraph");
    likesParagraph.textContent = `${article.likes} likes`;

    updateArticle(article);
}

export function addDislike() {
    const articleTitle = document.querySelector("h3").textContent;

    let article = articlesCopy.find((a) => a.title === articleTitle);

    ++article.dislikes;

    const dislikesParagraph = document.getElementById("dislikesParagraph");
    dislikesParagraph.textContent = `${article.dislikes} dislikes`;

    updateArticle(article);
}

export function addComment() {}
