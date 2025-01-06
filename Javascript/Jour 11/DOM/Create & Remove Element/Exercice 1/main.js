// 1.

let DivContent = document.getElementById("content")

let h2Exo1 = document.createElement("h2")

DivContent.appendChild(h2Exo1)

let Texth2Exo1 = document.createTextNode("Part 6 - Exercice 1")

h2Exo1.appendChild(Texth2Exo1)

// 2.

let PExo2 = document.createElement("p")

function generateLoremIpsum(wordCount) {
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    const words = lorem.split(' '); // Divise le texte en mots
    let result = [];

    while (result.length < wordCount) {
        result = result.concat(words); // Ajoute les mots jusqu’à atteindre le nombre voulu
    }

    return result.slice(0, wordCount).join(' '); // Coupe l’excédent et rejoint les mots avec des espaces
}


let TextPExo2 = document.createTextNode(generateLoremIpsum(15))

PExo2.appendChild(TextPExo2)

DivContent.appendChild(PExo2)

//  3.

let h1Exo3 = document.createElement("h1")

let Texth1Exo3 = document.createTextNode("Le DOM - Création de HTML")

h1Exo3.appendChild(Texth1Exo3)

DivContent.prepend(h1Exo3)

//  4.

let DivSecondaire = document.getElementById("secondaire")

DivSecondaire.innerHTML = DivContent.innerHTML;

let h2DivSecondaire = DivSecondaire.querySelector("h2")

function TitleExo(x) {
    return "Part 6 - Exercice " + x;
}

h2DivSecondaire.textContent = (TitleExo(2))

// 5.

let body = document.querySelector("body")

let DivMatiere = document.createElement("div")

DivMatiere.setAttribute("id", "matiere")

body.append(DivMatiere)

let OrdList = document.createElement("ol")

DivMatiere.appendChild(OrdList)

OrdList.innerHTML += "<li>Dom : Event listener</li><li>Dom : Create Element</li><li>Dom : Remove Element</li>"

