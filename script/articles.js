let articles = [
    {
        category: `featured`,
        title: `Scientists Shocked as "Floating Island" Appears Overnight in the Atlantic`,
        contents: `Residents of several coastal towns in western Europe woke up Tuesday morning to a bizarre sight: a massive landmass floating slowly across the Atlantic Ocean...`,
        time: ``,
        date: ``,
        imgLink: `images/ChatGPT_Image_1.png`,
        comments: [
            {
                commenter: `anon`,
                comment: `This is absurd`,
            },
        ],
        likes: 0,
        dislikes: 0,
    },
    {
        category: `featured`,
        title: `Ancient Forest Discovered Beneath Sahara Desert After Record Rainfall`,
        contents: `A team of archaeologists stumbled upon a vast fossilised forest buried just metres below the Saharan sand, believed to date back over 50,000 years to a wetter, greener era...`,
        time: ``,
        date: ``,
        imgLink: `images/ChatGPT_Image_2.png`,
        comments: [
            {
                commenter: ``,
                comment: ``,
            },
        ],
        likes: 0,
        dislikes: 0,
    },
    {
        category: `featured`,
        title: `Centuries-Old Shipwreck Found Intact Off the Coast of Portugal`,
        contents: `Deep-sea divers exploring a previously uncharted trench have uncovered a merchant vessel believed to date from the 15th century, with its cargo still sealed below deck...`,
        time: ``,
        date: ``,
        imgLink: ``,
        comments: [
            {
                commenter: ``,
                comment: ``,
            },
        ],
        likes: 0,
        dislikes: 0,
    },
    {
        category: `featured`,
        title: `World's Largest Iceberg Breaks Free, Heads Toward Shipping Lanes`,
        contents: `An iceberg the size of Portugal has detached from Antarctica's western shelf, prompting urgent warnings from maritime authorities across the southern hemisphere...`,
        time: ``,
        date: ``,
        imgLink: `images/ChatGPT_Image_3.png`,
        comments: [
            {
                commenter: ``,
                comment: ``,
            },
        ],
        likes: 0,
        dislikes: 0,
    },
    {
        category: `featured`,
        title: `Rare Atmospheric Phenomenon Turns Skies Green Across Scandinavia`,
        contents: `Millions across Norway, Sweden, and Finland looked up in astonishment on Friday evening as an unusual solar event painted the sky a vivid emerald green for nearly two hours...`,
        time: ``,
        date: ``,
        imgLink: ``,
        comments: [
            {
                commenter: ``,
                comment: ``,
            },
        ],
        likes: 0,
        dislikes: 0,
    },
    {
        category: `featured`,
        title: `Astronomers Detect Repeating Radio Signal From Nearby Star System`,
        contents: `For the third time in six months, radio telescopes in Chile have picked up a structured pulse emanating from a star just 12 light-years from Earth, baffling researchers...`,
        time: ``,
        date: ``,
        imgLink: `images/ChatGPT_Image_4.png`,
        comments: [
            {
                commenter: ``,
                comment: ``,
            },
        ],
        likes: 0,
        dislikes: 0,
    },
    {
        category: `side`,
        title: `Man Emerges From Cave After 500 Days Alone, Thinks It Has Been Three Weeks`,
        contents: `A French volunteer who agreed to live in isolation beneath the Pyrenees as part of a time-perception study has surfaced completely convinced that barely a month had passed...`,
        time: `13:55`,
        date: ``,
        imgLink: ``,
        comments: [
            {
                commenter: ``,
                comment: ``,
            },
        ],
        likes: 0,
        dislikes: 0,
    },
];

export function addArticleToList(category, title, contents, time, date, imgLink) {
    const article = {
        category: category,
        title: title,
        contents: contents,
        time: time,
        date: date,
        imgLink: imgLink,
        comments: [],
        likes: 0,
        dislikes: 0
    }
    articles.push(article);
    return article;
}

export function getAllArticlesCopy() {}

export function removeArticleFromList() {}
