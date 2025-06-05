const questions = [
    {
        question: "Durante o processo de divisão celular, os cromossomos se duplicam para garantir que cada célula filha receba uma cópia completa do material genético. Qual estrutura é responsável por essa duplicação?",
        answers: [
           {id: 1, text: "Ribossomos", correct:false,},
           {id: 2, text: "DNA", correct:true,},
           {id: 3, text: "RNA", correct:false,},
           {id: 4, text: "Lisossomos", correct:false,},
        ]
    },
    {
        question: "Em uma família, um casal de heterozigotos para uma doença genética autossômica recessiva tem filhos. Qual é a chance de um dos filhos nascer com a doença?",
        answers: [
           {id: 1, text: "0%", correct:false,},
           {id: 2, text: "50%", correct:false,},
           {id: 3, text: "25%", correct:true,},
           {id: 4, text: "75%", correct:false,},
        ]
    },
    {
        question: "A cor dos olhos é determinada por diversos genes, sendo um exemplo de herança:",
        answers: [
           {id: 1, text: "Poligênica", correct:true,},
           {id: 2, text: "Dominante simples", correct:false,},
           {id: 3, text: "Codominante", correct:false,},
           {id: 4, text: "Ligada ao sexo", correct:false,},
        ]
    },
    {
        question: "Ao analisar um heredograma, observa-se que uma característica aparece somente em indivíduos do sexo masculino e é transmitida por mães não afetadas. Qual é o tipo de herança envolvido?",
        answers: [
           {id: 1, text: "Autossômica dominante", correct:false,},
           {id: 2, text: "Autossômica recessiva", correct:false,},
           {id: 3, text: "Ligada ao cromossomo Y", correct:false,},
           {id: 4, text: "Ligada ao cromossomo X recessiva", correct:true,},
        ]
    },
    {
        question: "A anemia falciforme é causada por uma mutação genética que altera a forma da hemoglobina. Indivíduos heterozigotos apresentam resistência à malária. Isso é um exemplo de:",
        answers: [
           {id: 1, text: "Mutação letal", correct:false,},
           {id: 2, text: "Seleção artificial", correct:false,},
           {id: 3, text: "Vantagem seletiva", correct:true,},
           {id: 4, text: "Herança poligênica", correct:false,},
        ]
    },
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-question-btn");

let