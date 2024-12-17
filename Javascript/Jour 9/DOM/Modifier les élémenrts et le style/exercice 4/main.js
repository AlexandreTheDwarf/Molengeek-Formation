let competences = {
    HTML: '71%',
    CSS: '95%',
    JS: '50%',
    React: '18%',
    Laravel: '100%'
};

// 1. Stocke tous les h2 dans la variable elements
let listeCompetences = document.querySelector("#liste-competences");
let elements = listeCompetences.querySelectorAll("h2");

console.log(elements);

// 2. Parcours l'objet competences avec une boucle for...in et insère les valeurs dans les bons h2

    let index = 0; // Compteur pour lier les h2 aux valeurs

    for (let competence in competences) {
        if (elements[index]) { // Vérifie que l'élément h2 existe
            elements[index].textContent += " : " + competences[competence]; // Insère la valeur dans le h2

            // Convertit le pourcentage en nombre pour pouvoir le comparer
            let percentage = parseInt(competences[competence]);

// 3. Change le style des h2 selon certaines conditions

            if (percentage < 50) {
                // Si le pourcentage est inférieur à 50, fond rouge et texte blanc
                elements[index].style.backgroundColor = "red";
                elements[index].style.color = "white";
            } else if (percentage > 50 && percentage < 100) {
                // Si le pourcentage est supérieur à 50 et inférieur à 100, fond vert et texte blanc
                elements[index].style.backgroundColor = "green";
                elements[index].style.color = "white";
            } else if (percentage === 50) {
                // Si le pourcentage est égal à 50, pas de fond, texte noir
                elements[index].style.backgroundColor = "";
                elements[index].style.color = "black";
            } else if (percentage === 100) {
                // Si le pourcentage est égal à 100, fond or et texte noir
                elements[index].style.backgroundColor = "gold";
                elements[index].style.color = "black";
            }
        }
        index++; // Incrémente l'index pour lier les compétences aux h2 successifs
    }