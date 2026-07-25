fetch("songs.json")

.then(response=>response.json())

.then(songs=>{


let today = new Date();

let index =
today.getDate() % songs.length;


let song=songs[index];



document.getElementById("title").innerHTML=song.title;

document.getElementById("artist").innerHTML=song.artist;

document.getElementById("year").innerHTML=song.year;


document.getElementById("story").innerHTML=song.story;

document.getElementById("fact").innerHTML=song.fact;



document.getElementById("youtube").href=song.youtube;

document.getElementById("spotify").href=song.spotify;

document.getElementById("apple").href=song.apple;


});
