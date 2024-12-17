let myObject = {
    nom: 'nicolas',
    age: 18,
}

// ### 1. En passant par la div dont l'id est object, récupère le h1 et le h2 dans un tableau du nom de myElements

let divObject = document.querySelector("#object")

let myElements = []

myElements.push(divObject.querySelector("h1"))
myElements.push(divObject.querySelector("h2"))

console.log(myElements)

// ### 2. Trouve une méthode pour créer un tableau des propriétés de ton objet

console.log(Object.keys(myObject))

// ### 3. Créer une boucle qui va parcourir toutes les propriétés contenu dans ton object et qui pour chacune d'elle fait un console.log de la propriété

for (let key in myObject) { 
    console.log(key, myObject[key]); // Affiche la propriété et sa valeur
}

// ### 4. Efface ton console.log, trouve un moyen d'aller dans ton objet récupéré la valeur de chaque propriétés et fait un console log de ce que cela retourne

Object.values(myObject).forEach(value => {
    console.log(value); // Affiche chaque valeur
});

// ### 5. Rajoute un count(compteur ou index comme tu l'entends) dans ta boucle

Object.values(myObject).forEach((value, index) => {
    console.log(`Compteur: ${index}, Valeur: ${value}`);
});

// ### 6. Sert toi de ce count/index pour parcourir ton tableau myElement dans ta boucle et d'y insirer ce qu'on te retourne a l'énoncé 4

Object.values(myObject).forEach((value, index) => {
        myElements[index].textContent = value; // Insère la valeur dans l'élément html
});