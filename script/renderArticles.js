import { getAllArticlesCopy } from "/script/articles.js";

export function renderArticles() {
    const articlesCopy = getAllArticlesCopy();

    articlesCopy.forEach((article) => {
        if (
            article.category === "featured" &&
            window.location.pathname.includes("index.html")
        ) {
            renderFeaturedArticleToIndex(article);
        } else {
            renderSideArticleToIndex(article);
        }
    });

    if (window.location.pathname.includes("article.html")) {
        const params = new URLSearchParams(window.location.search);

        const articleTitle = params.get("title");

        const mainArticle = articlesCopy.find(
            (article) => article.title === articleTitle,
        );
        renderArticleToArticlePage(mainArticle);
    }
}

export function renderFeaturedArticleToIndex(article) {
    const articleElement = createMainArticle(article);

    const articleLink = document.createElement("a");
    articleLink.classList.add("absolute", "inset-0");
    articleLink.href = `article.html?title=${encodeURIComponent(article.title)}`;

    articleElement.prepend(articleLink);

    const mainWindow = document.querySelector("main");
    mainWindow.children[0].after(articleElement);
}

export function renderSideArticleToIndex(article) {
    const articleElement = document.createElement("article");
    articleElement.classList.add(
        "grid",
        "grid-cols-6",
        "p-2",
        "mb-[10px]",
        "relative",
    );

    const articleLink = document.createElement("a");
    articleLink.classList.add("absolute", "inset-0");
    articleLink.href = `article.html?title=${encodeURIComponent(article.title)}`;

    const articleTime = document.createElement("p");
    articleTime.classList.add(
        "pt-1",
        "col-span-1",
        "row-span-2",
        "text-sm",
        "lg:text-xs",
    );
    articleTime.textContent = `${article.time}`;

    const articleTitle = document.createElement("h3");
    articleTitle.classList.add("col-span-5", "text-lg");
    articleTitle.textContent = `${article.title}`;

    const articleContents = document.createElement("p");
    articleContents.classList.add("col-span-5", "hidden", "lg:block");
    articleContents.textContent = `${article.contents}`;

    articleElement.append(articleLink, articleTime, articleTitle, articleContents);

    const asideWindow = document.querySelector("aside");
    asideWindow.prepend(articleElement);
}

function renderArticleToArticlePage(article) {
    const articleElement = createMainArticle(article);

    const timeAndDate = document.createElement("p");
    timeAndDate.textContent = `${article.time}, ${article.date}`;

    articleElement.children[0].after(timeAndDate);

    const likesAndDislikes = document.createElement("div");
    likesAndDislikes.classList.add("flex");

    const likeButton = document.createElement("button");
    likeButton.id = "likeButton";
    likeButton.classList.add("p-2");
    likeButton.textContent = "LIKE";

    const likes = document.createElement("p");
    likes.classList.add("p-2");
    likes.id = "likesParagraph";
    likes.textContent = `${article.likes} likes`;

    const dislikeButton = document.createElement("button");
    dislikeButton.id = "dislikeButton";
    dislikeButton.classList.add("p-2");
    dislikeButton.textContent = "DISLIKE";

    const dislikes = document.createElement("p");
    dislikes.classList.add("p-2");
    dislikes.id = "dislikesParagraph";
    dislikes.textContent = `${article.dislikes} dislikes`;

    likesAndDislikes.append(likeButton, likes, dislikeButton, dislikes);

    articleElement.append(likesAndDislikes);

    const mainWindow = document.querySelector("main");
    mainWindow.append(articleElement);
}

function createMainArticle(article) {
    const articleElement = document.createElement("article");
    articleElement.classList.add("p-2", "mt-[20px]", "relative");

    const articleTitle = document.createElement("h3");
    articleTitle.classList.add("text-xl", "font-serif");
    articleTitle.textContent = `${article.title}`;

    articleElement.append(articleTitle);

    if (article.imgLink) {
        const articleImg = document.createElement("div");
        articleImg.classList.add("article-image");
        articleImg.style.backgroundImage = `url(${article.imgLink})`;

        articleElement.append(articleImg);
    }

    const articleContents = document.createElement("p");
    articleContents.textContent = `${article.contents}`;

    articleElement.append(articleContents);

    return articleElement;
}
