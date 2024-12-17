// ### 1. Récupère le h2 dont la valeur est "Exercice" et affiche uniquement le text

let titleExercice = Array.from(document.querySelectorAll("h2")).find(h2 => h2.textContent.includes("Exercice"));

console.log(titleExercice.textContent)

// ### 2. Trouve le moyen de modifier sa valeur par "Exercice 1"

titleExercice.textContent = "Exercice 1";
console.log(titleExercice.outerHTML)

// ### 3. Récupère l'élément p juste en dessous ce h2 et rajoute y la ligne js utilisé pour résoudre l'exercice 2.

let NextToTitleExercice = titleExercice.nextElementSibling

NextToTitleExercice.textContent = "Exercice 1";
console.log(NextToTitleExercice.outerHTML)

// ### 4. Récupère la première section et trouve le moyen d'affiche juste le nom de l'id dans la console

let sectionOne = document.querySelector("section")
console.log(sectionOne.getAttribute("id"))

// ### 5. Récupère le premier h1 et trouve le moyen d'afficher juste le nom de la class dans la console ( attention il existe deux propriétés pour afficher les class, fait l'exercice avec l'une et puis avec l'autre !)

let titleh1 = document.querySelector("h1")
console.log(titleh1.getAttribute("class"))
console.log(titleh1.classList.value)

// ### 6. Avec l'aide d'un forEach affiche le nom de class de chaque h1

let Allh1 = document.querySelectorAll("h1")

Allh1.forEach(element => {
    console.log(element.classList.value)
});

// ### 7. Trouve une propriété pour afficher tous les attributs du premier input

const nodeMap = document.querySelector("input").attributes;
let text = [];
for (let i = 0; i < nodeMap.length; i++) {
  text.push(nodeMap[i].name + " = " + nodeMap[i].value);
}
console.log(text)

// ### 8. Trouve le moyen de récupérer la valeur dans l'attribut type du premier input

console.log(nodeMap[0].value)

// ### 9. Récupère l'input dont l'id est "inputPassword3" et ajoute lui un attribut "type" dont la valeur est "password"

let inputPassword3 = document.querySelector("#inputPassword3")

inputPassword3.setAttribute("type", "password")

console.log(inputPassword3.outerHTML)

// ### 10. Modifie la valeur de l'attribut "type" du premier input avec la valeur "color"

let input = document.querySelector("input");
input.setAttribute("type", "color")

console.log(input)