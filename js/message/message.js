import messages from "./messages.js";


let currentMood = "happy";


/* =========================================
   GET RANDOM MESSAGE
   ========================================= */

function getRandomMessage(mood = currentMood) {

    const moodMessages =
        messages[mood] || messages.happy;

    const randomIndex =
        Math.floor(
            Math.random() * moodMessages.length
        );

    return moodMessages[randomIndex];
}


/* =========================================
   SHOW MESSAGE
   ========================================= */

function showMessage(mood = currentMood) {

    currentMood = mood;

    const message =
        getRandomMessage(mood);


    /* Create popup */

    const popup =
        document.createElement("div");

    popup.className =
        "message-popup";


    /* Message text */

    const text =
        document.createElement("p");

    text.className =
        "message-text";

    text.textContent =
        message;


    /* Close button */

    const closeButton =
        document.createElement("button");

    closeButton.className =
        "message-close";

    closeButton.textContent =
        "Okay";


    /* Build popup */

    popup.appendChild(text);

    popup.appendChild(closeButton);


    /* Add to page */

    document.body.appendChild(popup);


    /* Close */

    closeButton.addEventListener("click", () => {

        popup.classList.add("hide");

        setTimeout(() => {

            popup.remove();

        }, 300);

    });

}


export {
    showMessage,
    getRandomMessage
};