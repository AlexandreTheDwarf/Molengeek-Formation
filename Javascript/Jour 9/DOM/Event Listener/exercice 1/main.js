// ### 1. Récupère le h1 dans une variable 

    let title = document.querySelector("h1")

// ### 2. Créer un programme qui met le texte du h1 en bleu

    // title.style.color = "blue"

// ### 3. Met ce programme dans une function

    let colorBlue = (x) => {
        x.style.color = "blue"
    }

// ### 4. Appelle cette function pour qu'elle soit executé 

    // colorBlue(title)

// ### 5. Met un écouteur d'événement sur le h1, qui au clique lance la function

    title.addEventListener("click", () => {
        colorBlue(title)
    })