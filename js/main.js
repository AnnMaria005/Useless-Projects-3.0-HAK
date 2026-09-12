import { playWelcomeSound, toggleSound, isSoundEnabled } from './sound.js';

window.addEventListener('DOMContentLoaded', () => {
    // 1. Try playing immediately on load
    playWelcomeSound();

    // 2. Fallback: If browser blocks autoplay, play on the first user click anywhere
    const triggerAudioOnFirstInteraction = () => {
        playWelcomeSound();
        window.removeEventListener('click', triggerAudioOnFirstInteraction);
    };
    window.addEventListener('click', triggerAudioOnFirstInteraction);

    // 3. Sound Toggle Button UI Logic
    const soundBtn = document.getElementById('sound-toggle-btn');
    
    soundBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent triggering the first-interaction listener
        
        const newState = !isSoundEnabled();
        toggleSound(newState);
        
        // Explicitly update icon based on the new state
        soundBtn.textContent = newState ? '🔊' : '🔇';
        
        if (newState) {
            playWelcomeSound();
        }
    });
});

import { setMouseMode } from './mouse.js';

const permanentToggle = document.getElementById('permanent-mode-toggle');

permanentToggle.addEventListener('change', (e) => {
    setMouseMode('permanent', e.target.checked);
});