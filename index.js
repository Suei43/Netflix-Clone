const video = document.querySelector('video');
const play = document.querySelector('.play');
const overlay = document.querySelector(".overlay")
const close = document.querySelector(".close")


play.addEventListener("click",()=>{
    overlay.classList.toggle('nowoverlay');
    video.currentTime = 0;
    video.pause();
})
close.addEventListener("click",()=>{
    overlay.classList.toggle('nowoverlay');
})