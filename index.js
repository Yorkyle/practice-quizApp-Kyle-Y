
const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: "What is the largest planet?",
    options: ["Earth", "Jupiter", "Mars", "Saturn"],
    answer: "Jupiter"
  },
  {
    question: "What is the highest mountain?",
    options: ["McKinley", "Everest", "Vesuvius", "Cahokia"],
    answer: "Everest"
  },
  {
    question: "Which is a shield volcano?",
    options: ["Honolulu", "Tacoma", "Vesuvius", "Etna"],
    answer: "Honolulu"
  },
  {
    question: "What is the largest Spanish-speaking country?",
    options: ["Ecuador", "Spain", "Peru", "Mexico"],
    answer: "Mexico"
  },
  {
    question: "What is the capital of Mexico?",
    options: ["Mexico City", "La Paz", "Asuncion", "Teguicigalpa"],
    answer: "Mexico City"
  }
];


const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const question = quizData[currentQuestion];
  questionElement.innerText = question.question;

  optionsElement.innerHTML = "";
  question.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    optionsElement.appendChild(button)
    button.addEventListener("click", selectAnswer);
  });
}

function confirmCorrect(event) {
  const selectedButton = event.target;
  const answer = quizData[currentQuestion].answer;

  if (selectedButton.innerText === answer) {
    showRightResult;
  } else {
    showWrongResult;
  };

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showFinalResult();
  }
}

function showRightResult() {
  quiz.innerHTML = `
      <h1>You got it correct!</h1>
      <p>Click the "next question" button to go to the next question</p>
    `;
}

function showWrongResult() {
  quiz.innerHTML = `
      <h1>You got it incorrect, you dingbat!</h1>
      <p>Click the "next question" button to go to the next question"</p>
    `;
}

function showFinalResult() {
  quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
}

showQuestion();