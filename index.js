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
    question: "What is the largest Spanish-speaking country", 
    options: ["Ecuador", "Spain", "Peru", "Mexico"], 
    answer: "Mexico" 
  },

  { 
    question: "What is the capital of Mexico?", 
    options: ["Mexico City", "La Paz", "Asuncion", "Teguicigalpa"], 
    answer: "Mexico City" 
  }
];

const questionElement = document.querySelector("#question");
const optionsElement = document.querySelector("#options");
const feedbackElement = document.querySelector("#feedback");
const nextBtnElement = document.querySelector("#nextBtn");

let currentQuestion = 0;
let score = 0;
let hasAnswered = false;

function showQuestion() {
  const q = quizData[currentQuestion];
  questionElement.textContent = q.question;
  optionsElement.innerHTML = "";
  feedbackElement.textContent = "";
  feedbackElement.className = "";
  nextBtnElement.disabled = true;
  hasAnswered = false;
  q.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.addEventListener("click", onChoose);
    optionsElement.appendChild(btn);
  });
}

function onChoose(e) {
  if (hasAnswered) return;
  hasAnswered = true;
  const selectedText = e.target.textContent;
  const correctText = quizData[currentQuestion].answer;
  lockChoices();
  if (selectedText === correctText) {
    feedbackElement.textContent = "Correct!";
    feedbackElement.className = "correct";
    score++;
  } else {
    feedbackElement.textContent = `Incorrect. Correct answer: ${correctText}`;
    feedbackElement.className = "incorrect";
  }
  nextBtnElement.disabled = false;
}

function lockChoices() {
  Array.from(optionsElement.children).forEach((b) => (b.disabled = true));
}

function onNext() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showFinal();
  }
}

function showFinal() {
  const total = quizData.length;
  document.querySelector("#quiz").innerHTML =
    `<h1>Quiz Completed!</h1><p>Your score: ${score}/${total}</p>`;
}

nextBtnElement.addEventListener("click", onNext);

showQuestion();
