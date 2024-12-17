// ### 1. Suit scrupuleusement les étapes ci-dessous

    // Récupérer la div via son ID
    let div = document.getElementById("content");

    // Créer une fonction qui log l'événement
    function logEvent(e) {
        console.log(e); // Affiche l'objet Event dans la console
    }

    // Ajouter un écouteur d'événement "click" sur la div
    div.addEventListener("click", (e) => {
        logEvent(e); // Passe l'événement à la fonction
// ### 2. Trouve le moyen d'afficher l'élément dans la console.log grace a la propriété target
        console.log(e.target)
// ### 3. Change ton console.log par une instruction qui permet de mettre sur l'élément un border red et observe en cliquant sur les éléments de ta page ce qu'il se passe    
        e.target.style.border = "1px solid red";
    });



    