import { removeArticleFromList } from "/script/articles.js";

export function removeArticle(article) {
    removeArticleFromList(article.title);
}
