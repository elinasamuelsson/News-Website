export function addArticle(e) {
    e.preventDefault();

    const articleType = document.querySelector('input[name="article"]:checked');

    if (!articleType) {
        alert("Must select article type to create a new article.");
        return;
    }

    if (articleType.value === "featured") {
        addFeaturedArticle();
    } else if (articleType.value === "side") {
        addSideArticle();
    }
}

function addFeaturedArticle() {
    const articleTitle = document.getElementById("articleTitle").value;
    const articleImgLink = document.getElementById("imgLink").value;
    const articleContents = document.getElementById("articleContents").value;

    if (!articleTitle || !articleContents) {
        alert("Must enter title and contents to add new featured article.");
        return;
    }
    console.log(articleTitle, articleContents);
}

function addSideArticle(articleData) {
    console.log("side");
}
