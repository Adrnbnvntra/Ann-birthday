document.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById("bg-music");
    var playPauseButton = document.getElementById("play-pause-button");

    playPauseButton.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            playPauseButton.textContent = "Pause Music";
        } else {
            audio.pause();
            playPauseButton.textContent = "Play Music";
        }
    });
});
