const questions = [
  {
    question: "Uma mulher com visão normal, cujo pai era daltônico, casa-se com um homem de visão normal. Considerando que o daltonismo é uma característica recessiva ligada ao cromossomo X, qual a probabilidade de esse casal ter uma filha daltônica?",
    answers: [
      { id: 1, text: "0%", correct: true},
      { id: 2, text: "25%", correct: false },
      { id: 3, text: "50%", correct: false },
      { id: 4, text: "75%", correct: false },
    ],
  },
  {
    question: "O DNA sofre mutações ao longo do tempo, o que pode levar à produção de proteínas defeituosas. Um tipo de mutação que substitui uma base nitrogenada por outra pode ou não alterar a proteína resultante. Essa alteração depende:",
    answers: [
      { id: 1, text: "da quantidade de bases alteradas.", correct: false },
      { id: 2, text: "da intensidade da mutação.", correct: false },
      { id: 3, text: "da posição da mutação e do código genético redundante.", correct: true },
      { id: 4, text: "do tipo de ligação entre os nucleotídeos.", correct: false },
    ],
  },
  {
    question: "Qual das opções diferencia o RNA do DNA?",
    answers: [
      { id: 1, text: "O RNA possui a base timina no lugar da uracila.", correct: false },
      { id: 2, text: "O RNA possui ribose e uracila.", correct: true },
      { id: 3, text: "O RNA é uma molécula sempre dupla.", correct: false },
      { id: 4, text: "O RNA se replica dentro do núcleo.", correct: false },
    ],
  },
  {
    question: "Durante a síntese de proteínas, o RNA mensageiro leva a informação genética do DNA para o:",
    answers: [
      { id: 1, text: "ribossomo.", correct: true },
      { id: 2, text: "retículo liso.", correct: false },
      { id: 3, text: "núcleo.", correct: false },
      { id: 4, text: "mitocôndria.", correct: false },
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