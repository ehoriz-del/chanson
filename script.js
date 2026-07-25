fetch("songs.json")

.then(response => response.json())

.then(songs => {


const startDate = new Date("2026-01-01");

const today = new Date();


const daysPassed = Math.floor(
(today - startDate) / (1000*60*60*24)
);



const index = daysPassed % songs.length;


const song = songs[index];



document.getElementById("title").textContent = song.title;


document.getElementById("artist").textContent = song.artist;


document.getElementById("year").textContent = song.year;



document.getElementById("story").textContent = song.story;


document.getElementById("fact").textContent = song.fact;



document.getElementById("youtube").href = song.youtube;


document.getElementById("spotify").href = song.spotify;


document.getElementById("apple").href = song.apple;



const todayText = today.toLocaleDateString(
"en-US",
{
year:"numeric",
month:"long",
day:"numeric"
}
);


document.getElementById("date").textContent =
todayText;



const expressions = [

"Voir la vie en rose — To see life through optimistic eyes",

"Bonheur — Happiness",

"Joie de vivre — Joy of living",

"À bientôt — See you soon",

"C'est la vie — That's life"

];


document.getElementById("expression").textContent =
expressions[index % expressions.length];


});
