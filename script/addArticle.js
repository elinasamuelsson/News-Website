import { addArticleToList, getAllArticlesCopy } from "/script/articles.js";

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
        addFeaturedArticle(article);
    } else if (articleType.value === "side") {
        addSideArticle(article);
    }
}

function addFeaturedArticle(article) {
    const articleElement = document.createElement("article");
    articleElement.classList.add("p-2");
    articleElement.classList.add("mt-[20px]");
    articleElement.classList.add("relative");

    articleElement.innerHTML = `
                            <a href="#" class="absolute inset-0"></a>`;

    const articleTitle = document.createElement("h3");
    articleTitle.classList.add("text-xl");
    articleTitle.classList.add("font-serif");
    articleTitle.textContent = `${article.title}`;

    articleElement.appendChild(articleTitle);
    console.log(articleElement);

    if (article.imgLink) {
        const articleImg = document.createElement("div");
        articleImg.classList.add("article-image");
        articleImg.style.backgroundImage = `url(${article.imgLink})`;

        articleElement.appendChild(articleImg);
    }

    const articleContents = document.createElement("p");
    articleContents.textContent = `${article.contents}`;

    articleElement.appendChild(articleContents);

    const mainWindow = document.querySelector("main");
    mainWindow.children[0].after(articleElement);
}

function addSideArticle(article) {
    const articleElement = document.createElement("article");
    articleElement.classList.add("grid");
    articleElement.classList.add("grid-cols-6");
    articleElement.classList.add("p-2");
    articleElement.classList.add("mb-[10px]");
    articleElement.classList.add("relative");

    articleElement.innerHTML = `
                            <a href="#" class="absolute inset-0"></a>`;

    const articleTime = document.createElement("p");
    articleTime.classList.add("pt-1");
    articleTime.classList.add("col-span-1");
    articleTime.classList.add("row-span-2");
    articleTime.classList.add("text-sm");
    articleTime.classList.add("lg:text-xs");
    articleTime.textContent = `${article.time}`;

    articleElement.appendChild(articleTime);
    
    const articleTitle = document.createElement("h3");
    articleTitle.classList.add("col-span-5");
    articleTitle.classList.add("text-lg");
    articleTitle.textContent = `${article.title}`;

    articleElement.appendChild(articleTitle);

    const articleContents = document.createElement("p");
    articleContents.classList.add("col-span-5");
    articleContents.classList.add("hidden");
    articleContents.classList.add("lg:block");
    articleContents.textContent = `${article.contents}`;

    articleElement.appendChild(articleContents);
    
    const asideWindow = document.querySelector("aside");
    asideWindow.prepend(articleElement);
}
