// Mouse Module
let mouseTrailEnabled = true;
let permanentMode = false;
let currentMood = 'happy';
let permanentObjects = [];

const moodSymbols = {
    happy: ['🌸', '✨', '🌼', '💖'],
    sad: ['💧', '🌧️', '🥀', '💨'],
    savage: ['🔥', '💀', '⚡', '💣'],
    chaotic: ['🌀', '🤡', '🐸', '🚀']
};

function getRandomSymbol(mood) {
    const list = moodSymbols[mood] || moodSymbols.happy;
    return list[Math.floor(Math.random() * list.length)];
}

function spawnObject(x, y, isPermanent = false) {
    if (!mouseTrailEnabled && !isPermanent) return;

    const el = document.createElement('div');
    el.className = isPermanent ? 'permanent-object' : 'trail-object';
    el.textContent = getRandomSymbol(currentMood);
    
    // Position near cursor with slight random offset
    const offsetX = (Math.random() - 0.5) * 20;
    const offsetY = (Math.random() - 0.5) * 20;
    el.style.left = `${x + offsetX}px`;
    el.style.top = `${y + offsetY}px`;
    
    document.body.appendChild(el);

    if (isPermanent) {
        permanentObjects.push(el);
    } else {
        // Remove after 2 seconds for performance
        setTimeout(() => {
            el.remove();
        }, 2000);
    }
}

function clearGarden() {
    permanentObjects.forEach(el => el.remove());
    permanentObjects = [];
}

function setMouseMode(mode, value) {
    if (mode === 'trail') mouseTrailEnabled = value;
    if (mode === 'permanent') permanentMode = value;
}

function setMood(mood) {
    currentMood = mood;
}

// Event Listeners
window.addEventListener('mousemove', (e) => {
    if (mouseTrailEnabled && !permanentMode) {
        // Throttle slightly or spawn every few moves for performance
        if (Math.random() > 0.3) {
            spawnObject(e.clientX, e.clientY, false);
        }
    }
});

window.addEventListener('click', (e) => {
    if (permanentMode) {
        spawnObject(e.clientX, e.clientY, true);
    }
});

export { spawnObject, clearGarden, setMouseMode, setMood };