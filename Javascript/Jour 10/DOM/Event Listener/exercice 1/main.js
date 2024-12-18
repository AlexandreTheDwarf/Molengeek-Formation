// ### 1. Créer un programme qui te permet de passer le contenu de la variable pContent jusqu'a une function et en suite fait en sorte que cette function ajoute ce qu'elle a reçue en parametre dans le p de la section, sert toi du button Exo1

let pContent = "Coucou"

let Exo1 = document.querySelector("input")
let paragraphe = document.querySelector("p")

function myFunction(pContent) {
        paragraphe.textContent = pContent
  }

  Exo1.addEventListener("click", () => {
    myFunction(pContent);
});

// ### 2. Créer un programme qui au clique du h1, le background devient gold et sa color red, Attention voici les contraintes :

let red = "red"

let gold = "gold"

let title = document.querySelector("h1")

function myFunctionColor(red, gold) {
    title.style.backgroundColor = gold
    title.style.color = red
}

title.addEventListener("click", () => {
    myFunctionColor(red, gold)
})