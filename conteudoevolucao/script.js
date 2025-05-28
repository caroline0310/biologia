const board = document.querySelector('.game-board');
const cardImages = [
  'australopithecus.jpg',
  'https://historiaantiga.com/wp-content/uploads/2019/07/Homo-Abilis.jpg',
  'homo_erectus.jpg',
  'homo_neanderthalensis.jpg',
  'homo_sapiens.jpg',
  'ferramentas_de_pedra.jpg',
  'controle_do_fogo.jpg',
  'uso_de_roupas.jpg',
  'desenvolvimento_da_linguagem.jpg',
  'agricultura.jpg'
];

let cards = [...cardImages, ...cardImages];
let flippedCards = [];
let matchedPairs = 0;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function createCard(image) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.image = image;
  const img = document.createElement('img');
  img.src = `images/${image}`;
  img.alt = image.split('.')[0];
  card.appendChild(img);
  card.addEventListener('click', flipCard);
  return card;
}

function flipCard() {
  if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
    this.classList.add('flipped');
    flippedCards.push(this);

    if (flippedCards.length === 2) {
      checkMatch();
    }
  }
}

function checkMatch() {
  const [firstCard, secondCard] = flippedCards;

  if (firstCard.dataset.image === secondCard.dataset.image) {
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    matchedPairs++;
    flippedCards = [];

    if (matchedPairs === cards.length / 2) {
      setTimeout(() => alert('Parabéns! Você completou o jogo!'), 500);
    }
  } else {
    setTimeout(() => {
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');
      flippedCards = [];
    }, 1000);
  }
}

function initializeGame() {
  shuffle(cards);
  cards.forEach(image => {
    const card = createCard(image);
    board.appendChild(card);
  });
}

initializeGame();
