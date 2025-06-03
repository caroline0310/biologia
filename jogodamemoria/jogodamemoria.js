const cardsArray = [
    {
        name: "Australopithecus",
        img: "https://alchetron.com/cdn/australopithecus-ee16c7b4-0ff9-44d8-aefb-f9c681b9df5-resize-750.jpeg"
    },
    {
        name: "Homo habilis",
        img: "https://historiaantiga.com/wp-content/uploads/2019/07/Homo-Abilis.jpg"
    },
    {
        name: "Homo erectus",
        img: "https://cdna.artstation.com/p/assets/images/images/038/128/964/large/nate-hodges-homo-erectus-cycles-artstation.jpg?1622240271"
    },
    {
        name: "Homo neanderthalensis",
        img: "https://www.planet-wissen.de/geschichte/urzeit/der_neandertaler/pw-neandertaler-model-100~_v-original.jpg"
    },
    {
        name: "Homo sapiens",
        img: "https://th.bing.com/th/id/OIP.pMRcyF4PwMV-WxXIN9-WsgHaHF?rs=1&pid=ImgDetMain"
       
    }

];

let gameBoard = document.getElementById('gameBoard');
let statusText = document.getElementById('status');
let restartBtn = document.getElementById('restartBtn');

let selected = [];
let matched = 0;
let lockBoard = false;

restartBtn.addEventListener('click', () => {
    gameBoard.innerHTML = '';
    matched = 0;
    selected = [];
    statusText.textContent = '';
    startGame();
});

function startGame() {
    const shuffledCards = [...cardsArray, ...cardsArray].sort(() => 0.5 - Math.random());
    shuffledCards.forEach(cardData => {
        const card = createCard(cardData);
        gameBoard.appendChild(card);
    });
}

function createCard(cardData) {
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
    img.alt = cardData.name;

    const label = document.createElement('span');
    label.textContent = cardData.name;

    back.appendChild(img);
    back.appendChild(label);

    cardInner.appendChild(front);
    cardInner.appendChild(back);
    card.appendChild(cardInner);

    card.addEventListener('click', () => flipCard(card));
    return card;
}

function flipCard(card) {
    if (lockBoard || selected.length >= 2 || card.classList.contains('flip') || selected.includes(card)) return;

    card.classList.add('flip');
    selected.push(card);

    if (selected.length === 2) {
        lockBoard = true;
        setTimeout(checkMatch, 1000);
    }
}

function checkMatch() {
    const [card1, card2] = selected;

    if (card1.dataset.name === card2.dataset.name) {
        matched++;
        statusText.textContent = `Pares encontrados: ${matched}`;

        if (matched === cardsArray.length) {
            statusText.textContent = "Parabéns! Você completou o jogo!";
        }
    } else {
        card1.classList.remove('flip');
        card2.classList.remove('flip');
    }

    selected = [];
    lockBoard = false;
}

// Inicia o jogo automaticamente ao carregar
startGame();
