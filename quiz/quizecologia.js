const questions = [
  {
    question: "A introdução de espécies exóticas em um ecossistema pode causar desequilíbrios ambientais porque:",
    answers: [
      { id: 1, text: "Essas espécies normalmente se alimentam apenas de lixo.", correct: false},
      { id: 2, text: "As espécies exóticas geralmente se tornam presas fáceis.", correct: false },
      { id: 3, text: "Elas substituem as espécies nativas, competindo por recursos.", correct: true },
      { id: 4, text: "São sempre mais frágeis do que as nativas.", correct: false },
    ],
  },
  {
    question: "O ciclo do carbono envolve processos fundamentais para a vida. Um exemplo de processo que libera carbono para a atmosfera é:",
    answers: [
      { id: 1, text: "Fotossíntese", correct: false },
      { id: 2, text: "Respiração celular", correct: true },
      { id: 3, text: "Infiltração da água", correct: false},
      { id: 4, text: "Fixação de nitrogênio", correct: false },
    ],
  },
  {
    question: "A relação ecológica entre um carrapato e um cachorro é considerada:",
    answers: [
      { id: 1, text: "Parasitismo", correct: true},
      { id: 2, text: "Mutualismo", correct: false },
      { id: 3, text: "Competição", correct: false },
      { id: 4, text: "Comensalismo", correct: false },
    ],
  },
  {
    question: "O aumento do efeito estufa tem relação direta com:",
    answers: [
      { id: 1, text: "O crescimento da camada de ozônio.", correct: false },
      { id: 2, text: "O uso de energia solar em larga escala.", correct: false },
      { id: 3, text: "O aumento da biodiversidade.", correct: false },
      { id: 4, text: "A liberação excessiva de gases como CO₂ e CH₄.", correct: true },
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