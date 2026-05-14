import { renderArticles } from "/script/renderArticles.js";
import { addArticle } from "/script/addArticle.js";
import { addLike, addDislike } from "/script/reactions.js";

// render articles on load
renderArticles();

//INDEX.HTML 
if (window.location.pathname.includes("index.html")) {
    // display admin view
    const adminButton = document.getElementById("adminButton");
    const adminView = document.getElementById("adminView");

    adminButton.addEventListener("click", () => {
        adminView.classList.toggle("hidden");
    });

    // add article
    const articleForm = document.getElementById("articleForm");
    articleForm.addEventListener("submit", addArticle);
}

//ARTICLE.HTML
if (window.location.pathname.includes("article.html")) {
    // add like to article
    const likeButton = document.getElementById("likeButton");
    likeButton.addEventListener("click", addLike);

    // add dislike to article
    const dislikeButton = document.getElementById("dislikeButton");
    dislikeButton.addEventListener("click", addDislike);
}
