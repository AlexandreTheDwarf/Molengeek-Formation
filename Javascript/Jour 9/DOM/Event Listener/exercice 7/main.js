// ### 1. Créer un programme en utilisant e.target, qui permet au click de la souris de : 

// Récupérer la div via son ID
let div = document.getElementById("content");

// Ajouter un écouteur d'événement "click" sur toute la div
div.addEventListener("click", (e) => {
    let target = e.target; // L'élément sur lequel le clic a été effectué

    // Conditions pour appliquer des styles spécifiques selon l'élément cliqué
    if (target.tagName === "DIV") {
        target.style.border = "2px solid blue"; // Bordure pour la div
    } else if (target.tagName === "P") {
        target.style.color = "red"; // Texte en rouge
        target.style.fontWeight = "bold"; // Texte en gras
    } else if (target.tagName === "H1") {
        target.style.textDecoration = "underline"; // Texte surligné
    } else if (target.tagName === "H2") {
        target.textContent = target.textContent.slice(0, -1); // Supprimer une lettre
    }
});

// ### 2

let text = "Il est possible de passer des paramètres dans la fonction utilisée dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !";

// Sélection de la première section
let section = document.querySelector("section");

// Sélection du paragraphe dans la section
let paragraph = section.querySelector("p");

// Ajout d'un écouteur d'événement "mouseover" sur la section
section.addEventListener("mouseover", () => {
    paragraph.textContent = text; // Mise à jour du texte du paragraphe
});
