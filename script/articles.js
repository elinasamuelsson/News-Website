import { saveToLocalStorage } from "/script/localStorage.js";

let articles = [
    {
        category: `featured`,
        title: `Scientists Shocked as "Floating Island" Appears Overnight in the Atlantic`,
        contents: `Residents of several coastal towns in western Europe woke up Tuesday morning to a bizarre sight: a massive landmass floating slowly across the Atlantic Ocean...`,
        time: `13:00`,
        date: `2026-05-13`,
        imgLink: `images/ChatGPT_Image_1.png`,
        comments: [
            {
                commenter: `Tobey`,
                comment: `This is absurd`,
            },
            {
                commenter: `Milo`,
                comment: `fake news.`,
            },
            {
                commenter: `Pelle`,
                comment: `The news says it's true so it must be true.`,
            },
        ],
        likes: 3,
        dislikes: 20,
    },
    {
        category: `featured`,
        title: `Ancient Forest Discovered Beneath Sahara Desert After Record Rainfall`,
        contents: `A team of archaeologists stumbled upon a vast fossilised forest buried just metres below the Saharan sand, believed to date back over 50,000 years to a wetter, greener era...`,
        time: ``,
        date: ``,
        imgLink: `images/ChatGPT_Image_2.png`,
        comments: [],
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
        comments: [],
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
        comments: [],
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
        comments: [],
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
        comments: [],
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
        comments: [],
        likes: 0,
        dislikes: 0,
    },
    {
        category: `side`,
        title: `Entire Flock of Sheep in Wales Refuses to Move for Eleven Days Straight`,
        contents: `Farmers in Powys are at a loss to explain why their herd of 340 sheep has stood motionless in the same field corner for nearly two weeks, showing no signs of distress...`,
        time: `13:21`,
        date: ``,
        imgLink: ``,
        comments: [],
        likes: 0,
        dislikes: 0,
    },
    {
        category: `side`,
        title: `Geologists Baffled by Perfect Geometric Cavern Found Under Vienna`,
        contents: `Workers excavating for a new metro line have broken into a vast underground chamber shaped almost exactly like a dodecahedron, with no record of its construction anywhere...`,
        time: `12:44`,
        date: ``,
        imgLink: ``,
        comments: [],
        likes: 0,
        dislikes: 0,
    },
    {
        category: `side`,
        title: `Town in Northern Finland Reports That Shadows Are Pointing the Wrong Direction`,
        contents: `Residents of Sodankylä began noticing the anomaly last Monday morning, with photographs appearing to confirm that shadows throughout the town consistently face northeast regardless of the sun's position...`,
        time: `12:10`,
        date: ``,
        imgLink: ``,
        comments: [],
        likes: 0,
        dislikes: 0,
    },
    {
        category: `side`,
        title: `Botanists Discover Plant That Appears to Grow Faster When Ignored`,
        contents: `A newly catalogued species found in the rainforests of Borneo seems to actively suppress its own growth when observed, leading researchers to question their methodology entirely...`,
        time: `11:38`,
        date: ``,
        imgLink: ``,
        comments: [],
        likes: 0,
        dislikes: 0,
    },
    {
        category: `side`,
        title: `Retired Postman Discovers 14th Century Kingdom in His Back Garden`,
        contents: `What began as an attempt to install a garden pond has led Derek Ashworth of rural Shropshire to uncover the apparent remains of a fortified settlement entirely absent from historical records...`,
        time: `11:02`,
        date: ``,
        imgLink: ``,
        comments: [],
        likes: 0,
        dislikes: 0,
    },
    {
        category: `side`,
        title: `Ocean Current Reverses Briefly for 40 Minutes, Then Resumes as Normal`,
        contents: `Monitoring buoys in the North Atlantic recorded a complete reversal of a major current last Thursday morning before it snapped back without explanation, leaving oceanographers deeply unsettled...`,
        time: `10:17`,
        date: ``,
        imgLink: ``,
        comments: [],
        likes: 0,
        dislikes: 0,
    },
    {
        category: `side`,
        title: `Archaeologists Unearth Roman Mosaic Depicting Something That Shouldn't Exist Yet`,
        contents: `A mosaic uncovered outside Naples appears to depict a detailed mechanical device bearing a striking resemblance to a steam engine, predating any known such invention by over 1,500 years...`,
        time: `09:33`,
        date: ``,
        imgLink: ``,
        comments: [],
        likes: 0,
        dislikes: 0,
    },
    {
        category: `side`,
        title: `Cloud Formation Over Buenos Aires Holds Perfectly Still for Six Hours`,
        contents: `While surrounding weather systems moved normally, a single large cumulonimbus cloud remained completely stationary above the city centre throughout the entire afternoon, defying all wind readings...`,
        time: `08:50`,
        date: ``,
        imgLink: ``,
        comments: [],
        likes: 0,
        dislikes: 0,
    },
    {
        category: `side`,
        title: `Library in Prague Reports Every Book Returned Overnight With Different Endings`,
        contents: `Staff at the Klementinum arrived Monday morning to find that hundreds of returned volumes had their final chapters subtly but unmistakably altered, with no signs of tampering to the physical pages...`,
        time: `08:05`,
        date: ``,
        imgLink: ``,
        comments: [],
        likes: 0,
        dislikes: 0,
    },
];

export function addArticleToList(
    category,
    title,
    contents,
    time,
    date,
    imgLink,
) {
    const article = {
        category: category,
        title: title,
        contents: contents,
        time: time,
        date: date,
        imgLink: imgLink,
        comments: [],
        likes: 0,
        dislikes: 0,
    };
    articles.push(article);
    saveToLocalStorage();
    return article;
}

export function getAllArticlesCopy() {
    return articles.map((article) => ({ ...article }));
}

export function removeArticleFromList(title) {
    const index = articles.findIndex((a) => a.title === title);
    articles.splice(index, 1);
    saveToLocalStorage();
}

export function updateArticle(article) {
    const index = articles.findIndex((a) => a.title === article.title);
    articles[index] = article;
    saveToLocalStorage();
    console.log(article);
}

export function setArticles(a) {
    articles = a;
}
