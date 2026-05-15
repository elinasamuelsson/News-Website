import { updateArticle } from "/script/articles.js";
import { createComment } from "/script/renderArticles.js";
import { getAllArticlesCopy } from "/script/articles.js";
import { toastMessage } from "/script/toastMessages.js";

export function addLike() {
    const articlesCopy = getAllArticlesCopy();
    const articleTitle = document.querySelector("article h3").textContent;

    let article = articlesCopy.find((a) => a.title === articleTitle);

    ++article.likes;

    const likesParagraph = document.getElementById("likesParagraph");
    likesParagraph.textContent = `${article.likes} likes`;

    updateArticle(article);
}

export function addDislike() {
    const articlesCopy = getAllArticlesCopy();
    const articleTitle = document.querySelector("article h3").textContent;

    let article = articlesCopy.find((a) => a.title === articleTitle);

    ++article.dislikes;

    const dislikesParagraph = document.getElementById("dislikesParagraph");
    dislikesParagraph.textContent = `${article.dislikes} dislikes`;

    updateArticle(article);
}

export function addComment(e) {
    e.preventDefault();

    const articlesCopy = getAllArticlesCopy();

    const commenter = document.getElementById("commenter").value;
    const contents = document.getElementById("contents").value;

    if (!commenter || !contents) {
        alert("Must enter name and comment.");
        return;
    }

    const comment = {
        commenter: commenter,
        comment: contents,
    };

    const articleTitle = document.querySelector("main article h3").textContent;

    let article = articlesCopy.find((a) => a.title === articleTitle);

    if (!article) return;
    article.comments.push(comment);

    const commentBoard = document.getElementById("commentBoard");

    const commentItem = createComment(comment);

    commentBoard.append(commentItem);
    
    toastMessage("Comment successfully posted.")
    updateArticle(article);
}
