let softSkills = {
    Trello: '49%',
    Git: '87%',
    GitHub: '50%',
    Discord: '15%',
};

// 1. Stocke tous les h2 dans la variable elements
let listeSoftSkills = document.querySelector("#liste-soft-skills");
let elements = listeSoftSkills.querySelectorAll("h2");

// ### 2. Insère dans les bons H2 les pourcentages de ton objet
elements.forEach((element) => {
    // Récupère le texte du h2 (par exemple "GitHub", "Trello", etc.)
    let skillName = element.textContent.trim(); // On enlève les espaces autour du texte

    // Vérifie si le nom de la compétence est dans l'objet softSkills
    if (softSkills[skillName]) {
        // Ajoute le pourcentage correspondant à la compétence dans le texte du h2
        element.textContent += " : " + softSkills[skillName];
    }
});

// ### 3. Change le style des h2 selon certaines conditions
elements.forEach((element) => {
    // Récupère le pourcentage à partir du texte du h2
    let percentage = parseInt(element.textContent.split(' : ')[1]);

    // Applique le style en fonction de la valeur du pourcentage
    if (percentage < 50) {
        element.style.backgroundColor = "red";
        element.style.color = "white";
    } else if (percentage > 50 && percentage < 100) {
        element.style.backgroundColor = "green";
        element.style.color = "white";
    } else if (percentage === 50) {
        element.style.backgroundColor = "";
        element.style.color = "black";
    } else if (percentage === 100) {
        element.style.backgroundColor = "gold";
        element.style.color = "black";
    }
});
