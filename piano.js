

const keyPlay = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`.key[data-key="${e.key}"]`);
    if(!audio) return;
    audio.currentTime = 0; //rewind audio to the start 
    audio.play();
    key.classList.add("play");
}

const keyStop = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`.key[data-key="${e.key}"]`);
    if(!audio) return;

    key.classList.remove("play");
}

window.addEventListener("keydown", keyPlay);
window.addEventListener("keyup", keyStop);


let loader = document.getElementById("preloader");
window.addEventListener("load", () => loader.style.display = "none")
