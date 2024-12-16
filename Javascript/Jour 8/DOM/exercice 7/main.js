// ### 1. Récupère la div dont l'id est content avec un querySelector et affiche le résultat dans la console

let divContent = document.querySelector("#content")
console.log(divContent)

// ### 2. Récupère la div dont l'id est content avec un querySelectorAll et affiche le résultat dans la console

let divContentTwo = document.querySelectorAll("#content")
console.log(divContentTwo)

// ### 3. Récupère les li dont la class est important avec querySelector et affiche le résultat dans la console

let liste = document.querySelector(".important")
console.log(liste)

// ### 4. Récupère les li dont la class est important avec querySelectorAll et affiche le résultat dans la console

let listes = document.querySelectorAll(".important")
console.log(listes)

// ### 5. Affiche avec l'aide d'un foreach le contenu de chaque li avec la dernière lettre en majuscule 

let AllListes = document.querySelectorAll("li")

AllListes.forEach(element => {
    let text = element.textContent; // Récupère le texte de l'élément
    let lastCharacter = text.slice(-1).toUpperCase(); // Dernière lettre en majuscule
    let newText = text.slice(0, -1) + lastCharacter; // Reconstruit le texte
    console.log(newText)
});

// ### 6. Récupère le p dont la class est "grandParagraphe" se trouvant dans la div avec l'id "content", tu dois ici utiliser un getElementById et un getElementsByClassName

let grandParagraphe = document.getElementsByClassName("grandParagraphe")
let DivContent = document.getElementById("content")