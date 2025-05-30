const cardsArray = [
    { name: "Australopithecus", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Australopithecus_afarensis-reconstruction.jpg/220px-Australopithecus_afarensis-reconstruction.jpg" },
    { name: "Homo habilis", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Homo_habilis_-_reconstruction.jpg/220px-Homo_habilis_-_reconstruction.jpg" },
    { name: "Homo erectus", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Homo_erectus_adult_male_-_reconstruction.jpg/220px-Homo_erectus_adult_male_-_reconstruction.jpg" },
    { name: "Homo neanderthalensis", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Homo_neanderthalensis.jpg/220px-Homo_neanderthalensis.jpg" },
    { name: "Homo sapiens", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Homo_sapiens_reconstruction.jpg/220px-Homo_sapiens_reconstruction.jpg" }
];

let gameBoard = document.getElementById('gameBoard');
let statusText = document.getElementById('status');
let selected = [];
let matched = 0;

// Duplicar e embaralhar
let gameCards = [...cardsArray, ...cardsArray];
gameCards.sort(() => 0.5 - Math.random());

// Criar as cartas
gameCards.forEach((cardData, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = cardData.name;

    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');

    const front = document.createElement('div');
    front.classList.add('card-front');

    const back = document.createElement('div');
    back.classList.add('card-back');
    const img = document.createElement('img');
    img.src = cardData.img;
    const label = document.createElement('span');
    label.textContent = cardData.name;

    back.appendChild(img);
    back.appendChild(label);

    cardInner.appendChild(front);
    cardInner.appendChild(back);
    card.appendChild(cardInner);
    gameBoard.appendChild(card);

    card.addEventListener('click', () => flipCard(card));
});

function flipCard(card) {
    if (
        selected.length < 2 &&
        !card.classList.contains('flip') &&
        !selected.includes(card)
    ) {
        card.classList.add('flip');
        selected.push(card);

        if (selected.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}

function checkMatch() {
    const [card1, card2] = selected;
    if (card1.dataset.name === card2.dataset.name) {
        matched += 1;
        statusText.textContent = `Pares encontrados: ${matched}`;
        if (matched === cardsArray.length) {
            statusText.textContent = "Parabéns! Você completou o jogo!";
        }
    } else {
        card1.classList.remove('flip');
        card2.classList.remove('flip');
    }
    selected = [];
}
