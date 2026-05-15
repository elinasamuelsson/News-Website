import {fetchFromLocalStorage} from "/script/localStorage.js";
import {getAllArticlesCopy} from "/script/articles.js";

export function renderArticles() {
	fetchFromLocalStorage();
	const articlesCopy = getAllArticlesCopy();

	const isIndex =
		window.location.pathname === "/" ||
		window.location.pathname.includes("index.html");

	articlesCopy.forEach((article) => {
		if (isIndex && article.category === "featured") {
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
		"border-b",
		"border-emerald-800/20",
		"last:border-b-0",
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
		"text-emerald-800",
		"font-semibold",
		"tabular-nums",
	);
	articleTime.textContent = `${article.time}`;

	const articleTitle = document.createElement("h3");
	articleTitle.classList.add(
		"col-span-5",
		"text-lg",
		"font-serif",
		"leading-snug",
		"text-gray-900",
	);
	articleTitle.textContent = `${article.title}`;

	const articleContents = document.createElement("p");
	articleContents.classList.add(
		"col-span-5",
		"hidden",
		"lg:block",
		"text-sm",
		"text-gray-500",
		"leading-relaxed",
	);
	articleContents.textContent = `${article.contents.slice(0, 60)} ...`;

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

	const likesAndDislikesContainer = createLikesAndDislikesContainer(article);

	const commentsContainer = createCommentsSection(article);

	const removeButton = document.createElement("button");
	removeButton.id = "removeButton";
	removeButton.textContent = "Remove this article";
	removeButton.classList.add(
		"mt-6",
		"px-4",
		"py-2",
		"text-sm",
		"text-gray-50",
		"bg-emerald-800",
		"hover:bg-emerald-900",
		"transition-colors",
		"duration-200",
	);

	articleElement.append(
		removeButton,
		likesAndDislikesContainer,
		commentsContainer,
	);

	const mainWindow = document.querySelector("main");
	mainWindow.append(articleElement);
}

function createMainArticle(article) {
	const articleElement = document.createElement("article");
	articleElement.classList.add(
		"w-full",
		"p-2",
		"mt-[10px]",
		"relative",
		"border-b",
		"border-emerald-800/30",
		"pb-4",
	);

	const articleTitle = document.createElement("h3");
	articleTitle.classList.add(
		"text-xl",
		"font-serif",
		"leading-snug",
		"text-gray-900",
		"mb-1",
	);
	articleTitle.textContent = `${article.title}`;

	const timeAndDate = document.createElement("p");
	timeAndDate.classList.add(
		"text-sm",
		"text-emerald-800",
		"font-semibold",
		"uppercase",
		"tracking-wide",
		"mt-1",
		"mb-2",
	);
	timeAndDate.textContent = `${article.time}, ${article.date}`;

	articleElement.append(articleTitle, timeAndDate);

	if (article.imgLink) {
		const articleImg = document.createElement("div");
		articleImg.classList.add("article-image", "my-2");
		articleImg.style.backgroundImage = `url(${article.imgLink})`;

		articleElement.append(articleImg);
	}

	const articleContents = document.createElement("p");
	articleContents.classList.add(
		"text-sm",
		"text-gray-600",
		"leading-relaxed",
		"mt-2",
	);

	const isIndex =
		window.location.pathname === "/" ||
		window.location.pathname.includes("index.html");

	if (isIndex) {
		articleContents.textContent = `${article.contents.slice(0, 60)} ...`;
	} else {
		articleContents.textContent = `${article.contents}`;
	}

	articleElement.append(articleContents);

	return articleElement;
}

function createLikesAndDislikesContainer(article) {
	const likesAndDislikes = document.createElement("div");
	likesAndDislikes.classList.add("flex", "items-center", "mt-4", "gap-3");

	const likeButton = document.createElement("button");
	likeButton.id = "likeButton";
	likeButton.classList.add(
		"px-4",
		"py-1.5",
		"text-sm",
		"font-semibold",
		"tracking-wide",
		"text-gray-50",
		"bg-emerald-700",
		"hover:bg-emerald-800",
		"transition-colors",
		"duration-200",
	);
	likeButton.textContent = "LIKE";

	const likes = document.createElement("p");
	likes.classList.add("text-sm", "text-gray-500", "mr-4");
	likes.id = "likesParagraph";
	likes.textContent = `${article.likes} likes`;

	const dislikeButton = document.createElement("button");
	dislikeButton.id = "dislikeButton";
	dislikeButton.classList.add(
		"px-4",
		"py-1.5",
		"text-sm",
		"font-semibold",
		"tracking-wide",
		"text-gray-50",
		"bg-gray-500",
		"hover:bg-gray-600",
		"transition-colors",
		"duration-200",
	);
	dislikeButton.textContent = "DISLIKE";

	const dislikes = document.createElement("p");
	dislikes.classList.add("text-sm", "text-gray-500");
	dislikes.id = "dislikesParagraph";
	dislikes.textContent = `${article.dislikes} dislikes`;

	likesAndDislikes.append(likeButton, likes, dislikeButton, dislikes);

	return likesAndDislikes;
}

function createCommentsSection(article) {
	const commentsContainer = document.createElement("div");
	commentsContainer.classList.add(
		"mt-8",
		"border-t",
		"border-emerald-800/20",
		"pt-4",
	);

	const commentBoard = document.createElement("div");
	commentBoard.id = "commentBoard";

	const commentHeader = document.createElement("h3");
	commentHeader.classList.add(
		"text-lg",
		"font-serif",
		"text-gray-900",
		"mb-4",
	);
	commentHeader.textContent = "Comments";

	commentBoard.append(commentHeader);

	article.comments.forEach((c) => {
		const comment = createComment(c);
		commentBoard.append(comment);
	});

	const commentForm = document.createElement("form");
	commentForm.id = "commentForm";
	commentForm.classList.add("mt-6");

	commentForm.innerHTML = `
        <h3 class="text-lg font-serif text-gray-900 mb-3">Post a comment</h3>
        <label for="commenter" class="text-sm font-semibold text-gray-700 uppercase tracking-wide">Name:</label><br>
        <input id="commenter" name="commenter"
            class="mt-1 mb-3 w-full border border-emerald-800/30 px-3 py-2 text-sm text-gray-900 focus:outline-none focus:border-emerald-800 transition-colors"><br>
        <label for="contents" class="text-sm font-semibold text-gray-700 uppercase tracking-wide">Comment:</label><br>
        <textarea id="contents" name="contents"
            class="mt-1 mb-3 w-full border border-emerald-800/30 px-3 py-2 text-sm text-gray-900 focus:outline-none focus:border-emerald-800 transition-colors resize-none h-24"> </textarea><br>
        <input type="submit" value="Submit"
            class="px-5 py-2 text-sm font-semibold tracking-wide text-gray-50 bg-emerald-800 hover:bg-emerald-900 transition-colors duration-200 cursor-pointer">
    `;

	commentsContainer.append(commentBoard, commentForm);

	return commentsContainer;
}

export function createComment(c) {
	const comment = document.createElement("div");
	comment.classList.add(
		"pb-4",
		"mb-4",
		"border-b",
		"border-emerald-800/10",
		"last:border-b-0",
	);

	const commenter = document.createElement("p");
	commenter.classList.add(
		"font-semibold",
		"text-sm",
		"text-emerald-800",
		"uppercase",
		"tracking-wide",
		"mb-1",
	);
	commenter.textContent = `${c.commenter}`;

	const content = document.createElement("p");
	content.classList.add(
		"italic",
		"pl-4",
		"text-sm",
		"text-gray-600",
		"leading-relaxed",
	);
	content.textContent = `${c.comment}`;

	comment.append(commenter, content);
	return comment;
}
