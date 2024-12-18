// ### 1. Créer un programme qui au clique d'un des éléments de la div l'élément s'affiche dans la console, en utilisant une boucle pour appliquer un écouteur d'événement sur chaque élément !


    let div = document.getElementById("content");

    // Convertir div.children en tableau pour utiliser forEach
    let divChild = Array.from(div.children);

    // Ajouter un écouteur d'événement à chaque élément
    divChild.forEach(element => {
        element.addEventListener("click", () => {
            console.log(element.outerHTML);
        });
    });

// ### 2. Créer un programme qui au double click d'un élément son texte est en majuscule

    function myFunction(element) {
        element.addEventListener("dblclick", () => {
            element.textContent = element.textContent.toUpperCase();
        });
    }

// ### 3. Créer un programme qui au hasard choisis parmis les propriétés suivants et l'applique aux éléments quand on clique sur le button GO : 

    let propriétés = [
        { property: "border", value: "1px solid gold" },
        { property: "backgroundColor", value: "blue" },
        { property: "backgroundColor", value: "red" },
        { property: "border", value: "5px dotted gold" }
    ];

    function applyRandomProperty(element) {
        // Choisir un objet au hasard dans le tableau
        let randomProperty = propriétés[Math.floor(Math.random() * propriétés.length)];

        // Appliquer la propriété et sa valeur à l'élément
        element.style[randomProperty.property] = randomProperty.value;
    }

    let buttonGO = document.querySelector("input")

    buttonGO.addEventListener("click", () => {
        // Ajouter une propriété aléatoire à chaque élément
        divChild.forEach(element => {
            applyRandomProperty(element)
        })
    })
