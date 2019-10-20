var songs = ["BillieEilish-BadGuy.mp3","BillieEilish-Copycat.mp3","BillieEilish-BuryAFriend.mp3"];
var postersSong = ["poster1.jpg","poster2.jpg","poster3.jpg"];
var currentSong = 0;

var songName = document.getElementById("songTitle");
var fill = document.getElementById("fill");

var song = new Audio();

window.onload = playSong;

function playSong(){
    song.src = "./musix/"+songs[currentSong];
    
    songName.textContent = songs[currentSong];

    song.play();
 }

 function PlayOrPause(){
     if(song.paused){
         song.play();
         $("#BtPlay i").attr("class","fas fa-play");
     }else{
         song.pause();
         $("#BtPlay i").attr("class","fas fa-pause");

     }
 }

 function nextSong(){
     currentSong++;
     if(currentSong > songs.length-1){
         currentSong = 0;
     }
     playSong();
 }
 