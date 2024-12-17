// Exercice 1

let input0 = document.getElementsByTagName("input")[0]

input0.addEventListener("focus", () => {
    input0.style.backgroundColor = "blue"
})

//  Exercice 2

let input1 = document.getElementsByTagName("input")[1]

input1.addEventListener("focus", () => {
    input1.style.backgroundColor = "blue"
})

input1.addEventListener("focusout", () => {
    input1.style.backgroundColor = "white"
})

//  Exercice 3 

let premierParagraphe = document.getElementsByClassName("premierParagraphe")[0]

let secondParagraphe = document.getElementsByClassName("secondParagraphe")[0]

let dernierParagraphe = document.getElementsByClassName("dernierParagraphe")[0]

let buttonExo0 = document.getElementsByClassName("buttonExo")[0]

buttonExo0.addEventListener("click", () => {
    premierParagraphe.textContent = secondParagraphe.textContent
    dernierParagraphe.textContent = secondParagraphe.textContent
})

// Exercice 4

let exo4 = document.getElementById("exo4")

let formControl = document.getElementsByClassName("form-control")[0]

let buttonExo1 = document.getElementsByClassName("buttonExo")[1]

buttonExo1.addEventListener("click", () => {
    exo4.textContent = formControl.value
})

//  Exercice 5

let imgResponsive = document.getElementsByClassName("img-responsive")[0]

let buttonExo5 = imgResponsive.nextElementSibling

let parahrapheExo5 = imgResponsive.previousElementSibling

buttonExo5.addEventListener("click", () => {
    let source = parahrapheExo5.textContent.split(':')[1].trim();
    imgResponsive.setAttribute("src", source)
})

//  Exercice 6

let tartine = document.getElementById("tartine"); // Correction : ajout de "document."
let thief = tartine.nextElementSibling;

let tartineSrc = ""; // Variable pour stocker le chemin de la tartine

// Événement : quand on clique sur la tartine
tartine.addEventListener("click", () => {
    tartineSrc = tartine.getAttribute("src"); // Récupère le chemin de la tartine
});

// Événement : quand on clique sur la Photo2
thief.addEventListener("click", () => {
    if (tartineSrc) { // Vérifie que le chemin est bien défini
        thief.setAttribute("src", tartineSrc); // Ajoute le chemin à la Photo2
    }
});

// Exercice 7

// Sélection du bouton avec la classe btn-arrow
let btnArrow = document.querySelector(".btn-arrow"); 

// Sélection des deux paragraphes par leurs IDs
let text01 = document.getElementById("text01");
let text02 = document.getElementById("text02");

// Ajout de l'événement click sur le bouton
btnArrow.addEventListener("click", () => {
    // Échange des contenus textuels
    let textOne = text01.textContent;
    let textTwo = text02.textContent;
    text01.textContent = textTwo;
    text02.textContent = textOne;
});
