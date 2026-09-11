// Sound Module
let soundEnabled = true;
let volumeLevel = 0.5;

// Create audio element and log loading state
const welcomeAudio = new Audio();
welcomeAudio.src = './assets/audio/welcome.mp3';
welcomeAudio.volume = volumeLevel;

welcomeAudio.addEventListener('canplaythrough', () => {
    console.log("Audio loaded successfully and ready to play!");
});

welcomeAudio.addEventListener('error', (e) => {
    console.error("Audio error: Could not load file. Check path './assets/audio/welcome.mp3'", e);
});

function playWelcomeSound() {
    if (!soundEnabled) {
        console.log("Sound is currently muted.");
        return;
    }
    
    welcomeAudio.currentTime = 0;
    const playPromise = welcomeAudio.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log("Audio played successfully!");
        }).catch(err => {
            console.warn("Browser blocked autoplay or interaction required:", err);
        });
    }
}

function toggleSound(enabled) {
    soundEnabled = enabled;
    console.log("Sound enabled state changed to:", soundEnabled);
}

function setVolume(value) {
    volumeLevel = Math.max(0, Math.min(1, value));
    welcomeAudio.volume = volumeLevel;
}

function isSoundEnabled() {
    return soundEnabled;
}

export { playWelcomeSound, toggleSound, setVolume, isSoundEnabled };