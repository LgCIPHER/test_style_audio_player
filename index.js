const playerButton = document.querySelector('.player-button'),
      audio = document.querySelector('audio'),
      playIcon = "./icon/211876_play_icon.svg",
      pauseIcon = "./icon/211871_pause_icon.svg";

const timeline = document.querySelector('.timeline');

const soundButton = document.querySelector('.sound-button'),
      soundIcon = "./icon/2203528_lound_sound_speaker_volume_icon.svg",
      muteIcon = "./icon/2203527_mute_sound_speaker_volume_icon.svg";

function toggleAudio () {
    if (audio.paused) {
        audio.play();
        playerButton.src = pauseIcon;
    } else {
        audio.pause();
        playerButton.src = playIcon;
    }
}

function audioEnded () {
    playerButton.innerHTML = playIcon;
}

function changeTimelinePosition () {
    const percentagePosition = (100*audio.currentTime) / audio.duration;
    timeline.style.backgroundSize = `${percentagePosition}% 100%`;
    timeline.value = percentagePosition;
}

function changeSeek () {
    const time = (timeline.value * audio.duration) / 100;
    audio.currentTime = time;
}

function toggleSound () {
    audio.muted = !audio.muted;
    soundButton.src = audio.muted ? muteIcon : soundIcon;
}

playerButton.addEventListener('click', toggleAudio);

audio.ontimeupdate = changeTimelinePosition;

timeline.addEventListener('change', changeSeek);

soundButton.addEventListener('click', toggleSound);

audio.onended = audioEnded;