const questions = [
    { question: "Quelle est la capitale économique de la Côte d'Ivoire ?", answers: ["Abidjan", "Yamoussoukro"], correct: "Abidjan" },
    { question: "Quelle est la capitale politique ?", answers: ["Abidjan", "Yamoussoukro"], correct: "Yamoussoukro" },
    // Ici on doit compléter avec les 100 questions réelles dans le projet final.
];

let shuffledQuestions, currentQuestionIndex;

function startGame() {
    const name = document.getElementById('playerName').value;
    if(name.trim() === "") {
        alert("Veuillez entrer votre nom.");
        return;
    }
    document.getElementById('presentation').classList.add('hide');
    document.getElementById('question-container').classList.remove('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    const questionElement = document.getElementById('question');
    const answerButtonsElement = document.getElementById('answer-buttons');
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn');
        if (answer === question.correct) {
            button.dataset.correct = true;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    const answerButtonsElement = document.getElementById('answer-buttons');
    answerButtonsElement.innerHTML = '';
    document.getElementById('next-btn').classList.add('hide');
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    Array.from(document.getElementById('answer-buttons').children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (correct) {
        selectedButton.classList.add('correct');
    } else {
        selectedButton.classList.add('incorrect');
    }
    document.getElementById('next-btn').classList.remove('hide');
}

function setStatusClass(element, correct) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        setNextQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('question-container').classList.add('hide');
    document.getElementById('result-container').classList.remove('hide');
    document.getElementById('result-text').innerText = "Félicitations ! Vous avez terminé le quiz !";
}

function restartGame() {
    window.location.reload();
}
