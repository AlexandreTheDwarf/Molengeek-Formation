// ### 1. Récupère et affiche le premier enfant de la dernière div

    // Récupère toutes les div
    let divs = document.getElementsByTagName("div");

    // Sélectionne la dernière div
    let lastDiv = divs[divs.length - 1];

    // Récupère le premier enfant de cette div
    let firstChildOfLastDiv = lastDiv.firstElementChild;

    // Affiche le résultat dans la console
    console.log(firstChildOfLastDiv.outerHTML);

// ### 2. Récupère et affiche le dernier enfant de la dernière div

    // Récupère le dernier enfant de cette div
    let lastChildOfLastDiv = lastDiv.lastElementChild;

// ### 3. Récupère l'élément i contenu dans le premier p de la dernière div et affiche le

    // Récupère le premier <p> de la dernière div
    let firstPOfLastDiv = lastDiv.getElementsByTagName("p")[0];

    // Récupère l'élément <i> à l'intérieur du premier <p>
    let iElement = firstPOfLastDiv.getElementsByTagName("i")[0];

    // Affiche l'élément <i> dans la console
    console.log(iElement.outerHTML);

// ### 4. Récupère l'élément b contenu dans le dernier p de la dernière div et affiche le

    let POfLastDiv = lastDiv.getElementsByTagName("p");

    let lastPofLastDiv = POfLastDiv[POfLastDiv.length -1]

    let bElement = lastPofLastDiv.getElementsByTagName("b")[0]

    console.log(bElement.outerHTML)

// ### 5. Affiche l'élément parent de l'élément i

    console.log(iElement.parentElement)

// ### 6. affiche l'élément parent de l'élément b

    console.log(bElement.parentElement)

// ### 7. affiche l'élément suivant (le premier élément se trouvant dans la dernière div)

    console.log(lastDiv.firstElementChild.outerHTML)