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

    articleElement.append(
        articleLink,
        articleTime,
        articleTitle,
        articleContents,
    );

    const asideWindow = document.querySelector("aside");
    asideWindow.prepend(articleElement);
}

function renderArticleToArticlePage(article) {
    const articleElement = createMainArticle(article);

    const timeAndDate = document.createElement("p");
    timeAndDate.textContent = `${article.time}, ${article.date}`;

    articleElement.children[0].after(timeAndDate);

    const likesAndDislikesContainer = createLikesAndDislikesContainer(article);

    const commentsContainer = createCommentsSection(article);

    const removeButton = document.createElement("button");
    removeButton.id = "removeButton";
    removeButton.textContent("Remove this article");

    articleElement.append(likesAndDislikesContainer, commentsContainer);

    const mainWindow = document.querySelector("main");
    mainWindow.append(articleElement);
}

function createMainArticle(article) {
    const articleElement = document.createElement("article");
    articleElement.classList.add("p-2", "mt-[10px]", "relative");

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

function createLikesAndDislikesContainer(article) {
    const likesAndDislikes = document.createElement("div");
    likesAndDislikes.classList.add("flex");

    const likeButton = document.createElement("button");
    likeButton.id = "likeButton";
    likeButton.classList.add(
        "pl-4",
        "pr-4",
        "text-white",
        "bg-green-500",
        "hover:bg-green-600",
    );
    likeButton.textContent = "LIKE";

    const likes = document.createElement("p");
    likes.classList.add("p-2", "mr-6");
    likes.id = "likesParagraph";
    likes.textContent = `${article.likes} likes`;

    const dislikeButton = document.createElement("button");
    dislikeButton.id = "dislikeButton";
    dislikeButton.classList.add(
        "pl-4",
        "pr-4",
        "text-white",
        "bg-red-500",
        "hover:bg-red-600",
    );
    dislikeButton.textContent = "DISLIKE";

    const dislikes = document.createElement("p");
    dislikes.classList.add("p-2");
    dislikes.id = "dislikesParagraph";
    dislikes.textContent = `${article.dislikes} dislikes`;

    likesAndDislikes.append(likeButton, likes, dislikeButton, dislikes);

    return likesAndDislikes;
}

function createCommentsSection(article) {
    const commentsContainer = document.createElement("div");

    const commentBoard = document.createElement("div");
    commentBoard.id = "commentBoard";

    const commentHeader = document.createElement("h3");
    commentHeader.classList.add("text-lg", "pt-10");
    commentHeader.textContent = "Comments";

    commentBoard.append(commentHeader);

    article.comments.forEach((c) => {
        const comment = createComment(c);

        commentBoard.append(comment);
    });

    const commentForm = document.createElement("form");
    commentForm.id = "commentForm";

    commentForm.innerHTML = `
        <h3 class="text-lg">Post a comment</h3>
        <label for="commenter">Name:</label><br>
        <input id="commenter" name="commenter"><br>
        <br>
        <label for="contents">Comment:</label><br>
        <textarea id="contents" name="contents"> </textarea><br>
        <input type="submit" value="Submit"></input>
    `;

    commentsContainer.append(commentBoard, commentForm);

    return commentsContainer;
}

export function createComment(c) {
    const comment = document.createElement("div");
    comment.classList.add("pb-6");

    const commenter = document.createElement("p");
    commenter.classList.add("font-bold");
    commenter.textContent = `${c.commenter}`;

    const content = document.createElement("p");
    content.classList.add("italic", "pl-4");
    content.textContent = `${c.comment}`;

    comment.append(commenter, content);
    return comment;
}
