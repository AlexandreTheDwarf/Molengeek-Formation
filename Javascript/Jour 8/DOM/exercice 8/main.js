// ### 1. Récupère avec un getElementsByClassName la class "redPurple"  et affiche le, observe ce qu'il se passe

let redPurple = document.getElementsByClassName("redPurple")
console.log(redPurple)

// ### 2. Fais la meme chose qu'a l'exercice précédent mais avec un querySelectorAll, observe la différence

let redPurpleTwo = document.querySelectorAll(".redPurple")
console.log(redPurpleTwo)

// ### 3. En utilisant un querySelectorAll trouve un moyen de ne récupérer que les h1 ayant la class "redPurple" 

let redPurpleTitle = document.querySelectorAll("h1.redPurple")
console.log(redPurpleTitle)

// ### 4. Trouve le moyen de récupèrer en un seul querySelectorAll tous les éléments li, les éléments p et les éléments span

let Li_P_span = document.querySelectorAll("li, p, span")
console.log(Li_P_span)

// ### 5. Trouve le moyen de récupèrer en un seul querySelectorAll tous les éléments li ayant la class important et les éléments p 

let Important_P = document.querySelectorAll("li.important, p")
console.log(Important_P)

// ### 6. Récupère en un seul querySelectorAll uniquement les h1 et les span ayant la class "redPurple"

let redPurpleTitleSpan = document.querySelectorAll("h1.redPurple, span.redPurple")
console.log(redPurpleTitleSpan)