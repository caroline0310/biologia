const questions = [
  {
    question: "A existência de estruturas como o osso do fêmur em baleias e em humanos é frequentemente citada como evidência de um ancestral comum entre esses animais. Essas estruturas são chamadas de:",
    answers: [
      { id: 1, text: "Estruturas análogas", correct: false},
      { id: 2, text: "Órgãos vitais", correct: false },
      { id: 3, text: "Caracteres adquiridos", correct: false },
      { id: 4, text: "Estruturas homólogas", correct: true },
    ],
  },
  {
    question: "A resistência de bactérias a antibióticos é um exemplo clássico de evolução. Essa resistência ocorre porque:",
    answers: [
      { id: 1, text: "Todas as bactérias já são naturalmente resistentes.", correct: false },
      { id: 2, text: "Os antibióticos fortalecem as bactérias.", correct: false },
      { id: 3, text: "As bactérias resistentes sobrevivem e se reproduzem mais.", correct: true },
      { id: 4, text: "Os antibióticos modificam o DNA das bactérias.", correct: false },
    ],
  },
  {
    question: "Ao observar pássaros com diferentes formatos de bico, Darwin percebeu que:",
    answers: [
      { id: 1, text: "As diferenças nos bicos estavam relacionadas à adaptação ao tipo de alimento.", correct: true},
      { id: 2, text: "Todos os bicos eram iguais porque vinham da mesma espécie.", correct: false },
      { id: 3, text: "Os pássaros com bico maior voavam mais rápido.", correct: false },
      { id: 4, text: "A variação nos bicos era fruto de mutações causadas pela alimentação.", correct: false },
    ],
  },
  {
    question: "Segundo a teoria sintética da evolução (Neodarwinismo), a base da variabilidade genética é:",
    answers: [
      { id: 1, text: "Mutação e recombinação genética.", correct: true },
      { id: 2, text: "Herança de caracteres adquiridos.", correct: false },
      { id: 3, text: "Transformações celulares voluntárias.", correct: false },
      { id: 4, text: "Seleção natural isolada.", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Próxima";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    button.dataset.id = answer.id;

    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  answers = questions[currentQuestionIndex].answers;
  const correctAnswer = answers.filter((answer) => answer.correct == true)[0];
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.id == correctAnswer.id;
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();