const ball = document.getElementById("img");
const input = document.getElementById("input");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");

const answersList = [
  "I dont know",
  "YES",
  "NO",
  "HELL NO",
  "You dont wanna know",
  "maybe",
  "forget about it",
  "try do it",
  "why not",
  "yup",
  "of course!",
];
const generateAnswer = () => {
  let num = Math.floor(Math.random() * answersList.length);
  answer.innerHTML = `<span>answer:</span> ${answersList[num]}`;
};
const imageMoving = () => {
  ball.classList.add("shake-animation");
};
const checkInput = () => {
  const inputValue = input.value;
  const regex = /[?]/;
  if (inputValue == "") {
    error.textContent = "type your question";
    answer.textContent = "";
  } else if (!inputValue.match(regex)) {
    error.textContent = "add - ? - sign";
    answer.textContent = "";
  } else if (inputValue !== "" && inputValue.slice(-1) === "?") {
    error.textContent = "";
    imageMoving();
    setTimeout(generateAnswer, 2000);
  }
};

ball.addEventListener("click", () => {
  checkInput();
});
