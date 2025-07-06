document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const cardBody = document.querySelector(".card-body");
    const guessingNumberInput = form.querySelector("#guessingNumber");
    const checkButton = form.querySelector("#check");
    const resultText = cardBody.querySelector(".resultText");
    const remainingAttempts = cardBody.querySelector(".remainingAttempts");

    let attempts = 3;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const guessedNumber = parseInt(guessingNumberInput.value);
        if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 5) {
            resultText.innerHTML = "⚠️ Please enter a number between 1 and 5.";
            return;
        }

        checkResult(guessedNumber);
    });

    function checkResult(guessedNumber) {
        const randomNumber = getRandomNumber(5);

        if (guessedNumber === randomNumber) {
            resultText.innerHTML = `🎉 You have won! The number was: ${randomNumber}`;
            remainingAttempts.innerHTML = "";
            checkButton.disabled = true;
        } else {
            attempts--;
            resultText.innerHTML = `❌ Wrong guess. The number was: ${randomNumber}`;
            remainingAttempts.innerHTML = `Attempts left: ${attempts}`;

            if (attempts <= 0) {
                resultText.innerHTML += "<br>😢 Game over. Please refresh to try again.";
                checkButton.disabled = true;
            }
        }
    }

    function getRandomNumber(limit) {
        return Math.floor(Math.random() * limit) + 1;
    }
});
