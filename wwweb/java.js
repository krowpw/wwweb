let play = document.getElementById("play")
let resize = document.getElementById("resize")
let off = document.getElementById("rotikoff")
let right = document.getElementById("right")
let video = document.querySelector("video")
let volume = document.getElementById("volume")
console.log(play, off, resize, right)

play.addEventListener("click", ()=>{
    if (video.paused == true) {
        video.play();
        
    } else {
        video.pause
    }
})

volume.addEventListener("input", ()=>{
    console.log(volume.value)
   video.volume = volume.value
})