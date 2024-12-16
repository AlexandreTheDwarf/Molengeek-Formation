// ### 1. Affiche le contenu textuel du premier paragraphe contenant la class "tartine", utilise une méthode pour récupérer un élémént via sa class

let tartineFirst = document.getElementsByClassName("tartine")[0]
console.log(tartineFirst.textContent)

// ### 2. Pareil que le précédent mais cette fois si c'est via l'id "toast"

let toast = document.getElementById("toast")
console.log(toast.textContent)

// ### 3. Affiche le dernier élément ayant la class tartine ( pas son contenu ou le text, l'élément en entier)

let tartine = document.getElementsByClassName("tartine")

let tartineLast = tartine[tartine.length -1]

console.log(tartineLast)
