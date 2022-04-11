const quizData=[{
    question:'How many continents are on earth?',
    a:'5',
    b:'6',
    c:'7',
    d:'1',
    correct:'c'
},{
    question:'How many years is a decade?',
    a:'1',
    b:'100',
    c:'1000',
    d:'10',
    correct:'d'
},{
    question:'Which is the biggest mammal in the world?',
    a:'The Antartic blue whale',
    b:'An elephant',
    c:'A giraffe',
    d:'A shark',
    correct:'a'
},{
    question:'What is the longest river in the world?',
    a:'Amazon',
    b:'Nile',
    c:'Volga',
    d:'Danube',
    correct:'b'
},{
    question:'In which country does the Danuble river begin?',
    a:'Romania',
    b:'Hungary',
    c:'Germany',
    d:'Austria',
    correct:'c'
}];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});