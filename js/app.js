import { showMessage } from "./message/message.js";


/* =========================================
   ELEMENTS
   ========================================= */

const settingsButton =
    document.getElementById("settingsButton");

const closeSettings =
    document.getElementById("closeSettings");

const settingsOverlay =
    document.getElementById("settingsOverlay");

const moodOptions =
    document.querySelectorAll(".mood-option");

const currentMoodText =
    document.getElementById("currentMood");

const messageButton =
    document.getElementById("messageButton");

const desktopTime =
    document.getElementById("desktopTime");


/* =========================================
   CURRENT MOOD
   ========================================= */

let currentMood = "happy";


/* =========================================
   SHOW INITIAL MESSAGE
   ========================================= */

showMessage(currentMood);


/* =========================================
   SETTINGS OPEN
   ========================================= */

settingsButton.addEventListener("click", () => {

    settingsOverlay.classList.add("open");

});


/* =========================================
   SETTINGS CLOSE
   ========================================= */

closeSettings.addEventListener("click", () => {

    settingsOverlay.classList.remove("open");

});


/* =========================================
   CLOSE SETTINGS WHEN CLICKING OUTSIDE
   ========================================= */

settingsOverlay.addEventListener("click", (event) => {

    if (event.target === settingsOverlay) {

        settingsOverlay.classList.remove("open");

    }

});


/* =========================================
   MOOD SELECTION
   ========================================= */

moodOptions.forEach((option) => {

    option.addEventListener("click", () => {


        /* Remove previous selection */

        moodOptions.forEach((item) => {

            item.classList.remove("active");

        });


        /* Select current mood */

        option.classList.add("active");


        /* Get mood */

        currentMood =
            option.dataset.mood;


        /* Update status */

        currentMoodText.textContent =
            currentMood.charAt(0).toUpperCase() +
            currentMood.slice(1);


        /* Show message */

        showMessage(currentMood);


        /* Close settings */

        settingsOverlay.classList.remove("open");

    });

});


/* =========================================
   RANDOM MESSAGE BUTTON
   ========================================= */

messageButton.addEventListener("click", () => {

    showMessage(currentMood);

});


/* =========================================
   DESKTOP CLOCK
   ========================================= */

function updateClock() {

    const now = new Date();

    const hours =
        String(now.getHours()).padStart(2, "0");

    const minutes =
        String(now.getMinutes()).padStart(2, "0");

    desktopTime.textContent =
        `${hours}:${minutes}`;

}


updateClock();

setInterval(updateClock, 1000);