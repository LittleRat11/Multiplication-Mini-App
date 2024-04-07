const num1 = Math.floor(Math.random() * 10) + 1;
const num2 = Math.floor(Math.random() * 10) + 1;
const question = document.querySelector("#question");
const userInput = document.querySelector("#input");
const submitBtn = document.querySelector(".btn");
const form = document.querySelector("#form");
const scoreEl = document.querySelector("#score");
let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
    score = 0;
}
scoreEl.innerText = `Score: ${score}`;

function checkResult() {
    if (score < 0) {
        score = 0;

    }
}
question.innerText = `What is ${num1} multiply by ${num2}?`;
const result = num1 * num2;


form.addEventListener("submit", () => {
    const answer = +userInput.value;
    if (answer === result) {
        score++;
        checkResult();
        updateScore();
    } else {
        score--;
        checkResult();

        updateScore();
    }
});

// *localstorage
function updateScore() {
    localStorage.setItem("score", JSON.stringify(score));
}