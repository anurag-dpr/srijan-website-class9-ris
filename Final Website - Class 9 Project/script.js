console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "xxxtentacion - Moonlight", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Post Malone - Better Now", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "The Chainsmokers - Closer", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "The Weeknd - Starboy", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Owsla - I do coke", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Mike Posner - I took a pill in ibiza", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Trevor Daniel - Falling", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Swae Lee - Sunflower", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "BoyWithUke - Understand", filePath: "songs/9.mp3", coverPath: "covers/9.png"},
    {songName: "Drake - One Dance", filePath: "songs/10.mp3", coverPath: "covers/10.png"},
    {songName: "Coolio - Gangsta's Paradise", filePath: "songs/11.mp3", coverPath: "covers/11.png"},
    {songName: "Eminem - Mockingbird", filePath: "songs/12.mp3", coverPath: "covers/12.png"},
    {songName: "xxxtentacion - Hope", filePath: "songs/13.mp3", coverPath: "covers/13.png"},
    {songName: "BoyWithUke - Two Moons", filePath: "songs/14.mp3", coverPath: "covers/14.png"},
    {songName: "Imagine Dragons - Bones", filePath: "songs/15.mp3", coverPath: "covers/15.png"},
    {songName: "Eminem - The Real Slim Shady", filePath: "songs/16.mp3", coverPath: "covers/16.png"},
    {songName: "BoyWithUke - Toxic", filePath: "songs/17.mp3", coverPath: "covers/17.png"},
    {songName: "Eminem - Venom", filePath: "songs/18.mp3", coverPath: "covers/18.png"},
    {songName: "xxxtentacion - Revenge", filePath: "songs/19.mp3", coverPath: "covers/19.png"},
    {songName: "Glass Animals - Heat Waves", filePath: "songs/20.mp3", coverPath: "covers/20.png"},
    {songName: "Farzi - Paisa Hai Toh", filePath: "songs/21.mp3", coverPath: "covers/21.jpg"},
    {songName: "Arijit Singh - Tere Hawaale", filePath: "songs/22.mp3", coverPath: "covers/22.jpg"},
    {songName: "Arijit Singh - Kesariya", filePath: "songs/23.mp3", coverPath: "covers/23.png"},
    {songName: "Mohammed Rafi - Aane Se Uske Aaye Bahar", filePath: "songs/24.mp3", coverPath: "covers/24.png"},
    {songName: "Mukesh - Suhana Safar", filePath: "songs/25.mp3", coverPath: "covers/25.png"},
    {songName: "Lata Mangeshkar - Phool Tumhe Bheja Hai", filePath: "songs/26.mp3", coverPath: "covers/26.png"},
    {songName: "Kishore Kumar - Zindagi Ek Safar Hai Suhana", filePath: "songs/27.mp3", coverPath: "covers/27.png"},
    {songName: "Kishore Kumar - Pal Pal Dil Ke Paas", filePath: "songs/28.mp3", coverPath: "covers/28.png"},
    {songName: "Shae Gill - Pasoori", filePath: "songs/29.mp3", coverPath: "covers/29.png"},
    {songName: "Rahul Sipligunj - Nacho Nacho", filePath: "songs/30.mp3", coverPath: "covers/30.png"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=29){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})