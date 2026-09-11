import messages from "./messages.js";

let currentMood = "happy";

function getRandomMessage(mood = currentMood) {

    const moodMessages = messages[mood] || messages.happy;

    const randomIndex = Math.floor(
        Math.random() * moodMessages.length
    );

    return moodMessages[randomIndex];
}

function showMessage(mood = currentMood) {

    currentMood = mood;

    const message = getRandomMessage(mood);

    console.log(message);
}

export {
    showMessage,
    getRandomMessage
};