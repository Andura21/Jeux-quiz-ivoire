
let playerName = "";
let currentLevel = 1;
let currentQuestionIndex = 0;
let score = 0;
let maxErrorsPerLevel = 2;
let errorsThisLevel = 0;
let questions = [];
let levels = {};

const allQuestions = {
    1: [
        { question: "Quelle est la capitale de la Côte d'Ivoire ?", options: ["Abidjan", "Yamoussoukro", "Bouaké", "Korhogo"], answer: "Yamoussoukro" },
        { question: "L'année de l'indépendance de la Côte d'Ivoire est ?", options: ["1960", "1958", "1965", "1970"], answer: "1960" },
        { question: "Quel est le fleuve le plus long de Côte d'Ivoire ?", options: ["Bandama", "Comoé", "Sassandra", "Cavally"], answer: "Bandama" },
        { question: "Quel est le plat national ivoirien ?", options: ["Garba", "Attiéké poisson", "Kédjénou", "Sauce graine"], answer: "Attiéké poisson" },
        { question: "Quelle langue est la plus parlée en Côte d'Ivoire ?", options: ["Baoulé", "Dioula", "Bété", "Agni"], answer: "Dioula" },
        { question: "Combien de régions compte la Côte d'Ivoire ?", options: ["31", "14", "25", "40"], answer: "31" },
        { question: "Quel est l'ancien président qui a proclamé l'indépendance ?", options: ["Houphouët-Boigny", "Laurent Gbagbo", "Alassane Ouattara", "Bédié"], answer: "Houphouët-Boigny" },
        { question: "Quel est l’emblème animal de la Côte d’Ivoire ?", options: ["Lion", "Éléphant", "Panthère", "Gazelle"], answer: "Éléphant" },
        { question: "La Côte d'Ivoire est bordée par quel océan ?", options: ["Atlantique", "Indien", "Pacifique", "Arctique"], answer: "Atlantique" },
        { question: "Quelle est la devise nationale ?", options: ["Union-Discipline-Travail", "Liberté-Égalité-Fraternité", "Force-Honneur-Patrie", "Paix-Prospérité-Amour"], answer: "Union-Discipline-Travail" },
        { question: "Quelle est la monnaie utilisée en Côte d’Ivoire ?", options: ["Franc CFA", "Naira", "Dollar", "Euro"], answer: "Franc CFA" },
        { question: "La Côte d'Ivoire fait partie de quelle organisation régionale ?", options: ["CEDEAO", "UE", "OTAN", "ASEAN"], answer: "CEDEAO" },
        { question: "Quel est le désert situé le plus près de la Côte d’Ivoire ?", options: ["Sahara", "Kalahari", "Namib", "Gobi"], answer: "Sahara" },
        { question: "Quelle star ivoirienne est surnommée 'Le Drogba du Coupé Décalé' ?", options: ["DJ Arafat", "Serge Beynaud", "Debordo", "Bebi Philip"], answer: "DJ Arafat" },
        { question: "Quelle est la deuxième ville la plus peuplée après Abidjan ?", options: ["Bouaké", "San Pedro", "Yamoussoukro", "Man"], answer: "Bouaké" },
        { question: "Quel est l’arbre symbolique de la Côte d’Ivoire ?", options: ["Baobab", "Fromager", "Cocotier", "Manguier"], answer: "Fromager" },
        { question: "Quel club de football ivoirien est célèbre en Afrique ?", options: ["ASEC Mimosas", "Africa Sports", "Williamsville AC", "Stella Club"], answer: "ASEC Mimosas" },
        { question: "Le cacao est produit principalement dans quelle région ?", options: ["Sud-Ouest", "Nord", "Est", "Centre"], answer: "Sud-Ouest" },
        { question: "Le président actuel est ?", options: ["Ouattara", "Gbagbo", "Bédié", "Konan"], answer: "Ouattara" },
        { question: "Quel est le célèbre parc national inscrit à l'UNESCO ?", options: ["Taï", "Comoé", "Banco", "Mont Sangbé"], answer: "Taï" }
    ],
    2: [
        { question: "La Côte d'Ivoire est située en Afrique de l'Ouest. Oui ou Non ?", answer: "Oui" },
        { question: "Quel est le pays le plus grand d'Afrique en termes de superficie ?", options: ["Algérie", "Soudan", "Libye", "République Démocratique du Congo"], answer: "Algérie" },
        { question: "Qui est le premier président de la Côte d'Ivoire ?", options: ["Felix Houphouët-Boigny", "Laurent Gbagbo", "Alassane Ouattara", "Henri Konan Bédié"], answer: "Felix Houphouët-Boigny" },
        { question: "Quel est le fleuve le plus long de l'Afrique ?", options: ["Nil", "Congo", "Limpopo", "Zambèze"], answer: "Nil" },
        { question: "Quel est le monument emblématique de la Côte d'Ivoire ?", ["La basilique Notre-Dame de la Paix", "La mosquée de la paix", "Le Palais présidentiel", "Le monument de la République"], answer: "La basilique Notre-Dame de la Paix" },
        { question: "En quelle année la Côte d'Ivoire a-t-elle obtenu son indépendance ?", options: ["1960", "1957", "1970", "1980"], answer: "1960" },
        { question: "Quelle est la monnaie officielle de la Côte d'Ivoire ?", options: ["Franc CFA", "Euro", "Dollars", "Livre"], answer: "Franc CFA" },
        { question: "Lequel de ces pays ne fait pas partie de l'Afrique de l'Ouest ?", options: ["Gabon", "Mali", "Niger", "Burkina Faso"], answer: "Gabon" },
        { question: "Quel est le plus grand port de la Côte d'Ivoire ?", options: ["Port autonome d'Abidjan", "Port de San Pedro", "Port de Bouaké", "Port de Grand-Bassam"], answer: "Port autonome d'Abidjan" },
        { question: "Laquelle de ces villes est la capitale économique de la Côte d'Ivoire ?", options: ["Abidjan", "Yamoussoukro", "Bouaké", "San Pedro"], answer: "Abidjan" },
        { question: "Quel est le plat traditionnel ivoirien à base de manioc ?", options: ["Attiéké", "Garba", "Poulet braisé", "Alloco"], answer: "Attiéké" }
        { question: "Le Danube traverse la Côte d'Ivoire. Oui ou Non ?", answer: "Non" }
    ], // Niveau 2 (20 questions différentes)
    3: [...], // Niveau 3 (20 questions différentes)
    4: [...], // Niveau 4 (20 questions différentes)
    5: [...]  // Niveau 5 (20 questions différentes)
};

// Mélange aléatoire
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Démarrage du jeu
function startQuiz() {
    playerName = document.getElementById("playerName").value;
    if (playerName.trim() === "") {
        alert("S'il vous plaît, entrez votre nom avant de commencer !");
        return;
    }
    document.getElementById("presentation").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    loadLevel(currentLevel);
}

// Charger niveau
function loadLevel(level) {
    questions = [...allQuestions[level]];
    shuffleArray(questions);
    currentQuestionIndex = 0;
    errorsThisLevel = 0;
    showQuestion();
}

// Afficher une question
function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        nextLevel();
        return;
    }
    let q = questions[currentQuestionIndex];
    document.getElementById("question").textContent = q.question;
    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    q.options.forEach(option => {
        let btn = document.createElement("button");
        btn.className = "option-button";
        btn.textContent = option;
        btn.onclick = () => selectAnswer(option);
        optionsDiv.appendChild(btn);
    });
}

// Sélection de réponse
function selectAnswer(selected) {
    let feedback = document.getElementById("feedback");
    if (selected === questions[currentQuestionIndex].answer) {
        feedback.textContent = "Bonne réponse !";
        feedback.className = "correct";
        score += 5;
    } else {
        feedback.textContent = "Mauvaise réponse...";
        feedback.className = "incorrect";
        errorsThisLevel++;
    }
    currentQuestionIndex++;
    setTimeout(() => {
        feedback.textContent = "";
        showQuestion();
    }, 1000);
}

// Passage au prochain niveau
function nextLevel() {
    if (errorsThisLevel > maxErrorsPerLevel) {
        alert(Désolé ${playerName}, vous avez fait trop d'erreurs à ce niveau.);
        document.getElementById("quiz").style.display = "none";
        document.getElementById("result").style.display = "block";
        document.getElementById("finalScore").textContent = Score final: ${score} points;
        return;
    }
    currentLevel++;
    if (currentLevel > 5) {
        document.getElementById("quiz").style.display = "none";
        document.getElementById("result").style.display = "block";
        document.getElementById("finalScore").textContent = Bravo ${playerName} ! Ton score final est de ${score} points.;
    } else {
        alert(Félicitations ${playerName} ! Passons au niveau ${currentLevel}.);
        loadLevel(currentLevel);
    }
}