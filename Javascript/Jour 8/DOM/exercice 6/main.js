// ### 1. Affiche le h3 qui est le premier enfant de la div content

    let divContent = document.getElementById('content')

    let divContentFirstChild = divContent.firstElementChild

    console.log(divContentFirstChild)

// ### 2. Affiche le titreNiv3

    let titreNiv3 = document.getElementById("titreNiv3")
    console.log(titreNiv3)

// ### 3. Affiche l'élément qui précède le titreNiv3

    let PreviousTitreNiv3 = titreNiv3.previousElementSibling

    console.log(PreviousTitreNiv3)

// ### 4. Affiche l'élément qui succède a petitParagraphe en utilisant la méthode nextElementSibling

    let petitParagraphe = document.getElementsByClassName('petitParagraphe')[0]

    let NextpetitParagraphe = petitParagraphe.nextElementSibling

// ### 5. Affiche le parent des éléments ayant comme class "important" 

    let important = document.getElementsByClassName("important")[0]

    let ParentDeimportant = important.parentElement;

    console.log(ParentDeimportant)

// ### 6. Affiche le premier enfant, du parent de "listElements"

    let listElements = document.getElementById("listElements")

    let FirstChildOfParentOflistElements =  listElements.parentElement.firstElementChild
    console.log(FirstChildOfParentOflistElements.outerHTML)

// ### 7. Affiche l'avant dernier élément ayant la class "important"

    let importantBis = document.getElementsByClassName("important"); 

    let AvantDernierImportant = importantBis[importantBis.length - 2]; 

    console.log(AvantDernierImportant);

    // ### 8. Affiche le deuxieme élément avant celui ayant comme id "textGeneral" (montes de deux balise en gros)

    let textGeneral = document.getElementById("textGeneral")

    console.log(textGeneral.previousElementSibling.previousElementSibling)

// ### 9. En partant du span Nom affiche l'élément "p" (ayant un span Prénom)

    let spans = document.getElementsByTagName("span")
    let NomSpan = Array.from(spans).find(span => span.textContent.includes("Nom :"));
    let Prenom = NomSpan.parentElement.nextElementSibling.firstElementChild
    console.log(Prenom)

// ### 10. En partant de Quentin, affiche Meilleur Coach

    let PrenomSpan = Array.from(document.getElementsByTagName("span")).find(span => span.textContent.includes("Prénom :"));
    let Coach = PrenomSpan.parentElement.previousElementSibling.firstElementChild.querySelector("b");
    console.log(Coach.textContent);  


// ### 11. Trouve une methode qui permet de récupérer "un" élément via sa class ou son id sans utiliser getElementById ou getElementsByClassName et récupère "grandParagraphe"

    let MethodParagraph = document.querySelector(".grandParagraphe")
    console.log(MethodParagraph)

// ### 12. Trouve une methode qui permet de récupérer plusieurs éléments, qu'ils aient des class ou non et affiche tous les li dans une boucle forEach()

    let MethodLi = document.querySelectorAll("li")
    MethodLi.forEach(element => {
        console.log(element)
    });
