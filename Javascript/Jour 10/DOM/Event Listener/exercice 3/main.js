// # 1. En utilisant une boucle pour appliquer un écouteur d'événement sur chaque "li", créer un programme qui permet de lancer une function du nom de sayMyName qui affiche une alert du texte du li sur le quel on clique.

let liste = document.querySelectorAll("li")

function sayMyName(x) {
    alert(x.textContent)
}

// liste.forEach(element => {
//     element.addEventListener("click", () => {
//         sayMyName(element)
//     })
// });

// # 2. En utilisant le meme procédé qu'au dessus Créer un programme qui permet de modifier le contenu de chaque Li en double cliquant dessus via un prompt(attention peut-être que tu devras commenter l'exercice précédent)

function changeMyName(x){
    let yourName = prompt("say your name")
    x.textContent = yourName
}

liste.forEach(element => {
    element.addEventListener("dblclick", () => {
        changeMyName(element)
    })
});

// # 3. Créer un programme qui permet d'inverser l'ordre de deux li ! avec l'aide des inputs et du button inverser

let inputOne = document.getElementById("li-one");
let inputTwo = document.getElementById("li-two");
let inverserButton = document.querySelector("input[type='button']");

function inverserLi(index1, index2) {
    let ul = liste[0].parentNode; // On récupère l'élément parent des <li> (le <ul>)
    let li1 = liste[index1]; // Récupérer le premier <li> à inverser
    let li2 = liste[index2]; // Récupérer le second <li> à inverser

    // Vérification : s'assurer que les index sont valides
    if (li1 && li2) {
        // Échanger les deux éléments dans le DOM
        ul.insertBefore(li2, li1);
        ul.insertBefore(li1, li2.nextSibling);

        // Mettre à jour pour refléter l'inversion
        liste = document.querySelectorAll("li");
    } else {
        alert("Les numéros entrés ne correspondent pas à des éléments valides.");
    }
}

// Ajouter un événement sur le bouton inverser
inverserButton.addEventListener("click", () => {
    let index1 = parseInt(inputOne.value) - 1; 
    let index2 = parseInt(inputTwo.value) - 1;

    // Inverser les deux éléments si les index sont valides
    if (!isNaN(index1) && !isNaN(index2) && index1 !== index2) {
        inverserLi(index1, index2);
    } else {
        alert("Veuillez entrer deux numéros valides et différents.");
    }
});