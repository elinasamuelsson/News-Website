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
		time: `09:15`,
		date: `2026-05-12`,
		imgLink: `images/ChatGPT_Image_2.png`,
		comments: [
			{
				commenter: `SandraK`,
				comment: `The Green Sahara period is well documented — this is entirely plausible. Fascinating find.`,
			},
			{
				commenter: `NomadTraveller`,
				comment: `I read about the humid Sahara in a geology class. Would love to see the full research paper.`,
			},
		],
		likes: 142,
		dislikes: 4,
	},
	{
		category: `featured`,
		title: `Centuries-Old Shipwreck Found Intact Off the Coast of Portugal`,
		contents: `Deep-sea divers exploring a previously uncharted trench have uncovered a merchant vessel believed to date from the 15th century, with its cargo still sealed below deck...`,
		time: `11:40`,
		date: `2026-05-11`,
		imgLink: ``,
		comments: [
			{
				commenter: `MarineHistorian`,
				comment: `Intact 15th-century wrecks aren't unheard of in deep cold water — the lack of oxygen preserves wood remarkably well.`,
			},
			{
				commenter: `Diogo_F`,
				comment: `Portugal has a rich maritime history from that era. I hope the cargo gets properly catalogued.`,
			},
		],
		likes: 98,
		dislikes: 2,
	},
	{
		category: `featured`,
		title: `World's Largest Iceberg Breaks Free, Heads Toward Shipping Lanes`,
		contents: `An iceberg the size of Portugal has detached from Antarctica's western shelf, prompting urgent warnings from maritime authorities across the southern hemisphere...`,
		time: `07:30`,
		date: `2026-05-10`,
		imgLink: `images/ChatGPT_Image_3.png`,
		comments: [
			{
				commenter: `ClimateWatch`,
				comment: `This has happened before with A68 and A76. Entirely credible and deeply concerning.`,
			},
			{
				commenter: `ShippingWeekly`,
				comment: `The rerouting costs alone will be enormous. Insurers are going to have a field day.`,
			},
		],
		likes: 211,
		dislikes: 6,
	},
	{
		category: `featured`,
		title: `Rare Atmospheric Phenomenon Turns Skies Green Across Scandinavia`,
		contents: `Millions across Norway, Sweden, and Finland looked up in astonishment on Friday evening as an unusual solar event painted the sky a vivid emerald green for nearly two hours...`,
		time: `22:05`,
		date: `2026-05-08`,
		imgLink: ``,
		comments: [
			{
				commenter: `AuroraChaser_Oslo`,
				comment: `I saw it myself from Tromsø. Green is unusual but not impossible depending on the altitude of the aurora.`,
			},
			{
				commenter: `PhysicsTeacherErik`,
				comment: `Oxygen at around 100km altitude emits green light. A strong enough solar storm could absolutely do this.`,
			},
		],
		likes: 304,
		dislikes: 8,
	},
	{
		category: `featured`,
		title: `Astronomers Detect Repeating Radio Signal From Nearby Star System`,
		contents: `For the third time in six months, radio telescopes in Chile have picked up a structured pulse emanating from a star just 12 light-years from Earth, baffling researchers...`,
		time: `14:50`,
		date: `2026-05-07`,
		imgLink: `images/ChatGPT_Image_4.png`,
		comments: [
			{
				commenter: `RadioAstro_Fan`,
				comment: `Probably a pulsar or magnetar, but the proximity is what makes this worth watching closely.`,
			},
			{
				commenter: `Skeptic42`,
				comment: `"Structured" is doing a lot of heavy lifting in this headline. Natural sources produce structured signals all the time.`,
			},
		],
		likes: 187,
		dislikes: 14,
	},
	{
		category: `side`,
		title: `Man Emerges From Cave After 500 Days Alone, Thinks It Has Been Three Weeks`,
		contents: `A French volunteer who agreed to live in isolation beneath the Pyrenees as part of a time-perception study has surfaced completely convinced that barely a month had passed...`,
		time: `13:55`,
		date: `2026-05-13`,
		imgLink: ``,
		comments: [
			{
				commenter: `CronobiologyNerd`,
				comment: `Michel Siffre did something similar in 1972 and had the same result. Our circadian rhythm completely decouples without light cues.`,
			},
			{
				commenter: `JustCurious_Paul`,
				comment: `500 days alone underground. I can barely handle a long weekend without wifi.`,
			},
		],
		likes: 76,
		dislikes: 1,
	},
	{
		category: `side`,
		title: `Entire Flock of Sheep in Wales Refuses to Move for Eleven Days Straight`,
		contents: `Farmers in Powys are at a loss to explain why their herd of 340 sheep has stood motionless in the same field corner for nearly two weeks, showing no signs of distress...`,
		time: `13:21`,
		date: `2026-05-13`,
		imgLink: ``,
		comments: [
			{
				commenter: `FarmerJenkins`,
				comment: `Sheep do huddle in corners when there's a predator smell in the air. Eleven days is extreme though.`,
			},
			{
				commenter: `WelshWanderer`,
				comment: `Classic Welsh sheep behaviour honestly. Mine do something similar every time it rains.`,
			},
		],
		likes: 54,
		dislikes: 3,
	},
	{
		category: `side`,
		title: `Geologists Baffled by Perfect Geometric Cavern Found Under Vienna`,
		contents: `Workers excavating for a new metro line have broken into a vast underground chamber shaped almost exactly like a dodecahedron, with no record of its construction anywhere...`,
		time: `12:44`,
		date: `2026-05-13`,
		imgLink: ``,
		comments: [
			{
				commenter: `UrbanArchaeologist`,
				comment: `Vienna has layers of Roman, medieval, and WWII-era underground structures. Could easily be something that was simply never catalogued.`,
			},
			{
				commenter: `Matthias_V`,
				comment: `A perfect dodecahedron? Natural crystal formations can be geometric but not like that. This is strange.`,
			},
		],
		likes: 89,
		dislikes: 11,
	},
	{
		category: `side`,
		title: `Town in Northern Finland Reports That Shadows Are Pointing the Wrong Direction`,
		contents: `Residents of Sodankylä began noticing the anomaly last Monday morning, with photographs appearing to confirm that shadows throughout the town consistently face northeast regardless of the sun's position...`,
		time: `12:10`,
		date: `2026-05-13`,
		imgLink: ``,
		comments: [
			{
				commenter: `OpticsSceptic`,
				comment: `This is physically impossible. A photograph can be faked and perception can be fooled — I'll wait for a proper controlled measurement.`,
			},
			{
				commenter: `FinnishPhotog`,
				comment: `I've seen the photos circulating on Finnish social media. They are genuinely weird-looking. Could be a lens artefact though.`,
			},
		],
		likes: 33,
		dislikes: 41,
	},
	{
		category: `side`,
		title: `Botanists Discover Plant That Appears to Grow Faster When Ignored`,
		contents: `A newly catalogued species found in the rainforests of Borneo seems to actively suppress its own growth when observed, leading researchers to question their methodology entirely...`,
		time: `11:38`,
		date: `2026-05-13`,
		imgLink: ``,
		comments: [
			{
				commenter: `PlantBiologistDr`,
				comment: `The observer effect here is almost certainly environmental — lighting, CO₂, temperature from the researchers' presence. Interesting methodology problem though.`,
			},
			{
				commenter: `GardenGuru`,
				comment: `My tomatoes grow better when I stop fussing over them too. Maybe there's something to this.`,
			},
		],
		likes: 61,
		dislikes: 9,
	},
	{
		category: `side`,
		title: `Retired Postman Discovers 14th Century Kingdom in His Back Garden`,
		contents: `What began as an attempt to install a garden pond has led Derek Ashworth of rural Shropshire to uncover the apparent remains of a fortified settlement entirely absent from historical records...`,
		time: `11:02`,
		date: `2026-05-13`,
		imgLink: ``,
		comments: [
			{
				commenter: `HistoryBuff_UK`,
				comment: `Shropshire is absolutely littered with undocumented medieval remains. This is more common than people think.`,
			},
			{
				commenter: `DerekAshworth`,
				comment: `Just wanted a pond. Now I've got English Heritage in my begonias every other Tuesday.`,
			},
		],
		likes: 203,
		dislikes: 2,
	},
	{
		category: `side`,
		title: `Ocean Current Reverses Briefly for 40 Minutes, Then Resumes as Normal`,
		contents: `Monitoring buoys in the North Atlantic recorded a complete reversal of a major current last Thursday morning before it snapped back without explanation, leaving oceanographers deeply unsettled...`,
		time: `10:17`,
		date: `2026-05-13`,
		imgLink: ``,
		comments: [
			{
				commenter: `OceanographerJane`,
				comment: `Current data can occasionally show reversal artefacts from sensor drift or calibration events. I'd want to see the raw buoy data before drawing conclusions.`,
			},
			{
				commenter: `ClimateAnxiety2026`,
				comment: `Given what's happening to the AMOC, I don't find this remotely funny or reassuring.`,
			},
		],
		likes: 47,
		dislikes: 18,
	},
	{
		category: `side`,
		title: `Archaeologists Unearth Roman Mosaic Depicting Something That Shouldn't Exist Yet`,
		contents: `A mosaic uncovered outside Naples appears to depict a detailed mechanical device bearing a striking resemblance to a steam engine, predating any known such invention by over 1,500 years...`,
		time: `09:33`,
		date: `2026-05-13`,
		imgLink: ``,
		comments: [
			{
				commenter: `ClassicistRome`,
				comment: `Hero of Alexandria described a steam-powered device in the 1st century AD. This wouldn't be the first hint that ancient engineers understood the principle.`,
			},
			{
				commenter: `AncientAliens_Fan`,
				comment: `Okay I won't say it. But I'm thinking it.`,
			},
		],
		likes: 158,
		dislikes: 7,
	},
	{
		category: `side`,
		title: `Cloud Formation Over Buenos Aires Holds Perfectly Still for Six Hours`,
		contents: `While surrounding weather systems moved normally, a single large cumulonimbus cloud remained completely stationary above the city centre throughout the entire afternoon, defying all wind readings...`,
		time: `08:50`,
		date: `2026-05-13`,
		imgLink: ``,
		comments: [
			{
				commenter: `MeteorologistBA`,
				comment: `Orographic lifting and urban heat islands can anchor clouds over cities for extended periods. Six hours is unusual but not impossible.`,
			},
			{
				commenter: `PorteñoSkywatcher`,
				comment: `I watched it from my roof in Palermo. It really did not move. Very eerie.`,
			},
		],
		likes: 72,
		dislikes: 5,
	},
	{
		category: `side`,
		title: `Library in Prague Reports Every Book Returned Overnight With Different Endings`,
		contents: `Staff at the Klementinum arrived Monday morning to find that hundreds of returned volumes had their final chapters subtly but unmistakably altered, with no signs of tampering to the physical pages...`,
		time: `08:05`,
		date: `2026-05-13`,
		imgLink: ``,
		comments: [
			{
				commenter: `LibrarianLenka`,
				comment: `I work here. The story is being exaggerated wildly. A few books had some pages stuck together. The internet ran away with it.`,
			},
			{
				commenter: `BookwormBruno`,
				comment: `Honestly if my copy of Moby Dick had a different ending I wouldn't complain.`,
			},
		],
		likes: 19,
		dislikes: 38,
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
}

export function setArticles(a) {
    articles = a;
}
