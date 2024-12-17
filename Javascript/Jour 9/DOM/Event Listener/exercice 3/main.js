//  ### 1. Met un écouteur d'événement sur le h1, rajoute la class text-blue

    let titleOne = document.querySelector("h1")

    titleOne.addEventListener("click", () => {
        titleOne.classList.add("text-blue");
    })

// ### 2. Au double clique du h3, rajoute la class text-error

    let titleThree = document.querySelector("h3")

    titleThree.addEventListener("dblclick", () => {
        titleThree.classList.add("text-error");
    })

// ### 3. Trouve une methode qui rajoute la class text-style sur le paragraphe mais qui en meme temps vérifie si la class est déjà dessus, dans ce cas la cette methode est capable de la retirer 

    let paragraphe = document.querySelector("p")

    paragraphe.addEventListener("click", () => {
        if (paragraphe.getAttribute("class") == "text-style"){
            paragraphe.classList.remove("text-style");
        }
        else{
            paragraphe.classList.add("text-style");
        }
    })

//  ### 4. Dans l'avant-dernier paragraphe, ajouter la classe "bolder" au mot (span) sur lequel on clique

    let paragrapheAll = document.querySelectorAll("p"); 
    let spans = paragrapheAll[document.querySelectorAll("p").length - 2].querySelectorAll("span");

    spans.forEach(span => {
        span.addEventListener("click", () => {
            // Ajoute la classe "bolder" au mot cliqué
            span.classList.add("bolder");
        });
    });


// ### 5. Dans le dernier paragraphe tu as trois span,, créer un programme qui rajoute la class "bolrder-red" sur le mot sur le quel on clique mais retire cette class au deux autres, si elles l'ont !

    let spansBis = paragrapheAll[document.querySelectorAll("p").length - 1].querySelectorAll("span");

    spansBis.forEach(span => {
        span.addEventListener("click", () => {
            // Supprime la classe "bolder" des autres spans pour qu'un seul mot soit boldé
            spansBis.forEach(s => s.classList.remove("bolder-red"));
            // Ajoute la classe "bolder" au mot cliqué
            span.classList.add("bolder-red");
        });
    });