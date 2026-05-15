import { getAllArticlesCopy, setArticles } from "/script/articles.js";

export function saveToLocalStorage() {
    localStorage.setItem("articles", JSON.stringify(getAllArticlesCopy()));
}

export function fetchFromLocalStorage() {

    const localStorageGet = localStorage.getItem("articles");

    if (!localStorageGet) {
        return;
    }

    const articles = JSON.parse(localStorageGet);

    setArticles(articles);
}
