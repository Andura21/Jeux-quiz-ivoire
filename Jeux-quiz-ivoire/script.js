const greeting = document.getElementById('greeting');
const questionElement = document.getElementById('question');
const choicesContainer = document.getElementById('choices');
const feedback = document.getElementById('feedback');
const nextButton = document.getElementById('next-button');

let currentLevel = 1;
let currentQuestionIndex = 0;
let shuffledQuestions = [];
let score = 0;

const questionsPerLevel = {
    1: [...Array(20)].map((_, i) => ({
        question: `Niveau 1 - Question ${i+1}`,
        choices: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"],
        answer: "Réponse A"
    })),
    2: [...Array(20)].map((_, i) => ({
        question: `Niveau 2 - Question ${i+1}`,
        choices: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"],
        answer: "Réponse B"
    })),
    3: [...Array(20)].map((_, i) => ({
        question: `Niveau 3 - Question ${i+1}`,
        choices: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"],
        answer: "Réponse C"
    })),
    4: [...Array(20)].map((_, i) => ({
        question: `Niveau 4 - Question ${i+1}`,
        choices: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"],
        answer: "Réponse D"
    })),
    5: [...Array(20)].map((_, i) => ({
        question: `Niveau 5 - Question ${i+1}`,
        choices: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"],
        answer: "Réponse A"
    }))
};

function startLevel(level) {
    currentLevel = level;
    shuffledQuestions = questionsPerLevel[level].sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = shuffledQuestions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.choices.forEach(choice => {
        const button = document.createElement('div');
        button.innerText = choice;
        button.classList.add('choice');
        button.addEventListener('click', () => selectAnswer(choice, currentQuestion.answer));
        choicesContainer.appendChild(button);
    });
}

function resetState() {
    feedback.innerText = '';
    choicesContainer.innerHTML = '';
}

function selectAnswer(selected, correct) {
    if (selected === correct) {
        feedback.innerText = "Bonne réponse ! Félicitations !";
        feedback.className = "good";
        score++;
    } else {
        feedback.innerText = "Mauvaise réponse ! Courage pour la suite !";
        feedback.className = "bad";
    }
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        if (currentLevel < 5) {
            alert(`Bravo ! Niveau ${currentLevel} terminé ! Passons au niveau ${currentLevel + 1} !`);
            startLevel(currentLevel + 1);
        } else {
            alert(`Félicitations, vous avez terminé tous les niveaux ! Score final : ${score}/100`);
        }
    }
});

function askName() {
    let name = prompt("Quel est votre prénom ?");
    greeting.innerText = `Bonjour ${name} ! Bonne chance pour ce super quiz ivoirien !`;
}

askName();
startLevel(1);