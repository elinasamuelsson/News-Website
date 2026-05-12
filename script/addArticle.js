import { addArticleToList, getAllArticlesCopy } from "/script/articles.js";
import {
    renderFeaturedArticle,
    renderSideArticle,
} from "/script/renderArticles.js";

export function addArticle(e) {
    e.preventDefault();

    const articleType = document.querySelector('input[name="article"]:checked');

    if (!articleType) {
        alert("Must select article type to create a new article.");
        return;
    }

    const articleTitle = document.getElementById("articleTitle").value;
    const articleImgLink = document.getElementById("imgLink").value;
    const articleTime = document.getElementById("articleTime").value;
    const articleDate = document.getElementById("articleDate").value;
    const articleContents = document.getElementById("articleContents").value;

    //no required fields empty validation
    if (!articleTitle || !articleContents || !articleTime || !articleDate) {
        alert("Must enter title, contents, time and date to add new article.");
        return;
    }

    const article = addArticleToList(
        articleType,
        articleTitle,
        articleContents,
        articleTime,
        articleDate,
        articleImgLink,
    );

    if (articleType.value === "featured") {
        renderFeaturedArticle(article);
    } else if (articleType.value === "side") {
        renderSideArticle(article);
    }
}
