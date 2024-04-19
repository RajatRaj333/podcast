console.log("welcome to pode Podcastify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));



let songs =[

    {songName: "Red code", filePath: "songs/1.mp3",coverPath: "cover1.jpeg"},
    {songName: "Back Ground", filePath: "songs/2.mp3",coverPath: "cover1.jpeg"},
    {songName: "Man of focus", filePath: "songs/3.mp3",coverPath: "cover1.jpeg"},
    {songName: "Back Ground", filePath: "songs/4.mp3",coverPath: "cover1.jpeg"},

]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})



// audioElement.play();
 
// // Handle play/pause click
 masterPlay.addEventListener('click',()=> {
    if (audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }

    
});




// Listen to Evetns 
audioElement.addEventListener('timeupdate',()=>{
    //update Seekbar
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
     element.classList.remove('fa-pause-circle');
     element.classList.add('fa-play-circle');

    })  
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
      element.addEventListener('click',(e)=>{
        makeAllPlays();
       

        songIndex= parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText= songs[songIndex].songName;

        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;

        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
      })

})

document.getElementById('next').addEventListener('click',()=>{
    if (songIndex>=9){
         songIndex=0
    }
    else{
        songIndex += 1;

    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;

    audioElement.currentTime =0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');


})
   
document.getElementById('previous').addEventListener('click',()=>{
    if (songIndex<=0){
         songIndex=0
    }
    else{
        songIndex -= 1; 

    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime =0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    

})




// console.log("Welcome to Spotify");
// let songIndex=0;
// let audioElement= new Audio('song.mp3');
// let masterPlay=document.getElementById('masterPlay');
// let myProgressBar=document.getElementById('myProgressBar');
// let gif=document.getElementById('gif');

// let songs = [
//     {songName: "Warriyo - Mortals (feat. Laura Brehm)", filepath: "song/1.mp3", coverpath: "covers/1.jpg"},
//     {songName: "Cielo - Muma-Huma", filepath: "song/2.mp3", coverpath: "covers/2.jpg"},
//     {songName: "Deaf Key- Invincible[Ncs Release]-320k", filepath: "song/3.mp3", coverpath: "covers/3.jpg"},
//     {songName: "name 4", filepath: "song/4.mp3", coverpath: "covers/4.jpg"},
//     {songName: "name 5", filepath: "song/5.mp3", coverpath: "covers/5.jpg"},
//     {songName: "name 6", filepath: "song/6.mp3", coverpath: "covers/6.jpg"},
//     {songName: "name 7", filepath: "song/7.mp3", coverpath: "covers/7.jpg"},
//     {songName: "name 8", filepath: "song/8.mp3", coverpath: "covers/8.jpg"},
//     {songName: "name 9", filepath: "song/9.mp3", coverpath: "covers/9.jpg"},
//     {songName: "name 10", filepath: "song/10.mp3", coverpath: "covers/10.jpg"},
// ]




//  // audioElement.play();

//  // handle play/pause click

//  masterPlay.addEventListener('click',()=>{
//     if(audioElement.paused || audioElement.currentTime<=0){
        
//         audioElement.play();
//         masterPlay.classList.remove('fa-circle-play');
//         masterPlay.classList.add('fa-circle-pause');
//         gif.style.opacity=1;

//     }

//     else{
//         audioElement.pause();
//         masterPlay.classList.remove('fa-circle-pause');
//         masterPlay.classList.add('fa-circle-play');
//         gif.style.opacity=0;
//     }
//  })

//  // listen to events

// audioElement.addEventListener('timeupdate',()=>{
//     //  console.log('timeupdate');

//     progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
//     console.log(progress);
    
//     myProgressBar.value=progress;

// })

// myProgressBar.addEventListener('change',()=>{

//     audioElement.currentTime=myProgressBar.value*audioElement.duration/100;


// })