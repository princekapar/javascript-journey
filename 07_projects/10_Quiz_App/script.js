const questions = [
    {
        question: "What is the capital of India?",
        answer: [
            {text: "Mumbai", correct: false},
            {text: "Chennai", correct: false},
            {text: "New Delhi", correct: true},
            {text: "Kolkata", correct: false},
        ]
    },
    {
        question: "Who was the first Prime Minister of India?",
        answer: [
            {text: "Mahatma Gandhi", correct: false},
            {text: "Jawaharlal Nehru", correct: true},
            {text: "Subhash Chandra Bose", correct: false},
            {text: "Rajendra Prasad", correct: false},
        ]
    },
    {
        question: "Which river is the longest in India?",
        answer: [
            {text: "Yamuna", correct: false},
            {text: "Brahmaputra", correct: false},
            {text: "Ganga", correct: true},
            {text: "Godavari", correct: false},
        ]
    },
    {
        question: "Who wrote the Indian national anthem?",
        answer: [
            {text: "Rabindranath Tagore", correct: true},
            {text: "Bankim Chandra Chatterjee", correct: false},
            {text: "Sarojini Naidu", correct: false},
            {text: "Jawaharlal Nehru", correct: false},
        ]
    },
    {
        question: "In which year did India gain independence?",
        answer: [
            {text: "1950", correct: false},
            {text: "1947", correct: true},
            {text: "1942", correct: false},
            {text: "1930", correct: false},
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: [
            {text: "Earth", correct: false},
            {text: "Mars", correct: true},
            {text: "Jupiter", correct: false},
            {text: "Saturn", correct: false},
        ]
    },
    {
        question: "What is the national animal of India?",
        answer: [
            {text: "Elephant", correct: false},
            {text: "Lion", correct: false},
            {text: "Bengal Tiger", correct: true},
            {text: "Leopard", correct: false},
        ]
    },
    {
        question: "Who is known as the Father of the Indian Constitution?",
        answer: [
            {text: "Mahatma Gandhi", correct: false},
            {text: "B. R. Ambedkar", correct: true},
            {text: "Sardar Patel", correct: false},
            {text: "Rajendra Prasad", correct: false},
        ]
    },
    {
        question: "Which state is known as the 'Land of Five Rivers'?",
        answer: [
            {text: "Rajasthan", correct: false},
            {text: "Punjab", correct: true},
            {text: "Uttar Pradesh", correct: false},
            {text: "Bihar", correct: false},
        ]
    },
    {
        question: "What is the currency of India?",
        answer: [
            {text: "Dollar", correct: false},
            {text: "Euro", correct: false},
            {text: "Rupee", correct: true},
            {text: "Yen", correct: false},
        ]
    },
    {
        question: "Which Indian scientist won the Nobel Prize for Physics in 1930?",
        answer: [
            {text: "C. V. Raman", correct: true},
            {text: "A. P. J. Abdul Kalam", correct: false},
            {text: "Homi Bhabha", correct: false},
            {text: "Vikram Sarabhai", correct: false},
        ]
    },
    {
        question: "Which Indian city is known as the Silicon Valley of India?",
        answer: [
            {text: "Hyderabad", correct: false},
            {text: "Bengaluru", correct: true},
            {text: "Chennai", correct: false},
            {text: "Pune", correct: false},
        ]
    }
];




const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score=0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}


function showQuestion() {

    resetState();


    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click",selectAnswer)
    })
}


function resetState() {
    nextButton.style.display = "none"
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");

    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true
    });

    nextButton.style.display= "block"
}


function showScore() {
    resetState();
    questionElement.innerHTML = `You score ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again"
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
})





startQuiz();