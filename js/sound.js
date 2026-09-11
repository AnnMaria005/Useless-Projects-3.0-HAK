// Sound Module
let soundEnabled = true;
let volumeLevel = 0.5;
const welcomeAudio = new Audio('./assets/audio/welcome.mp3');
welcomeAudio.volume = volumeLevel;

function playWelcomeSound() {
    if (!soundEnabled) return;
    welcomeAudio.currentTime = 0;
    welcomeAudio.play().catch(err => {
        console.log("Audio autoplay restricted or missing file:", err);
    });
}

function toggleSound(enabled) {
    soundEnabled = enabled;
}

function setVolume(value) {
    volumeLevel = Math.max(0, Math.min(1, value));
    welcomeAudio.volume = volumeLevel;
}

export { playWelcomeSound, toggleSound, setVolume };