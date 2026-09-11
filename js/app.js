import { showMessage } from "./message/message.js";

const moodSelector = document.getElementById("mood");


// Show a random message when the app starts
showMessage(moodSelector.value);


// Change message when mood changes
moodSelector.addEventListener("change", () => {

    const selectedMood = moodSelector.value;

    showMessage(selectedMood);

});