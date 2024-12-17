// ## Partie 1 Ajout de contenu
// ### 1. Dans le h1 ajoute le texet suivant : Les attributs class et id

let titleh1 = document.querySelector("h1")
titleh1.textContent = "Les attributs class et id"

// ### 2. Dans le premier h2 ajoute le texte suivant : Exercice 2 partie A

let titleh2 = document.querySelectorAll("h2")

titleh2[0].textContent = "Exercice 2 partie A"

// ### 3. Dans le second h2 ajoute le texte suivant : Exercice 2 partie B

titleh2[1].textContent = "Exercice 2 partie B"

// ### 4. Dans le premier p ajoute le texte suivant(attention a conserver les balises) :  L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b> 

let paragraphe = document.querySelectorAll("p")

paragraphe[0].innerHTML = "L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b> "

// ### 5. Dans le second p ajoute le texte suivant(attention a conserver les balises) :   La manipulation de l'attribut Style peut-être une <i>solution</i> rapide

paragraphe[1].innerHTML = "La manipulation de l'attribut Style peut-être une <i>solution</i> rapide"

// ## Partie 2.1 Ajout d'attribut et de leurs valeurs

// ### 6. Rajoute l'attribut id dans le h1 et donne lui la valeur "bigTitle"

titleh1.setAttribute("id", "bigTitle")

// ### 7. Rajoute l'attribut class a la div avec comme valeur "container"

let div = document.querySelector("div")

div.setAttribute("class", "container")

// ### 8. Aux h2 ajoute avec l'aide d'un foreach l'attribut class avec comme valeur "title"

titleh2.forEach(element => {
    element.setAttribute("class", "title")
});

// ### 9. Aux p ajoute avec l'aide d'un foreach l'attribut class avec comme valeur "text"

paragraphe.forEach(element => {
    element.setAttribute("class", "text")
});

// ## Partie 2.2 Ajout d'attribut et de leurs valeurs

// ### 10. Dans la première section ajoute l'attribut class et les class suivantes : margin-bottom border-black padding

let sectionAll = document.querySelectorAll("section")

sectionAll[0].classList.add("margin-bottom", "border-black", "padding")

// ### 11. Dans la seconde section ajoute l'attribut class et les class suivantes : margin-top border-black padding

sectionAll[1].classList.add("margin-top", "border-black", "padding")

// ### 12. Dans la div ayant comme parent une section, ajoute l'attribut style et fait en sorte qu'il ait un fond bleu, une bordure de ton choix, une hauteur de 20px et une largueur de 20px

let sectionDiv = sectionAll[1].querySelector("div")

sectionDiv.style.backgroundColor = "blue"
sectionDiv.style.border = "1px dotted black"
sectionDiv.style.height = "20px"
sectionDiv.style.width = "20px"