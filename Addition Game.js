let firstNumberEl = document.getElementById("firstNumber");
let secondNumberEl = document.getElementById("secondNumber");
let userInputEl = document.getElementById("userInput");
let checkButtonEl = document.getElementById("checkButton");
let restartButtonEl = document.getElementById("restartButton");
let gameResultEl = document.getElementById("gameResult");

function restartButtonFunction() {
    let randomnum_1 = Math.ceil(Math.random() * 100);
    let randomnum_2 = Math.ceil(Math.random() * 100);

    firstNumberEl.textContent = randomnum_1;
    secondNumberEl.textContent = randomnum_2;

    gameResultEl.textContent = "";
    userInputEl.value = "";
}
restartButtonFunction()

function checkButtonFunction() {
    if (parseInt(userInputEl.value) === (parseInt(firstNumberEl.textContent) + parseInt(secondNumberEl.textContent))) {
        gameResultEl.textContent = "Congratulations! You got it right ";
    } else {
        gameResultEl.textContent = "Please! Try again";
    }
}