// ### 1. Affiche le contenu textuel du second h1

    let secondTitle = document.getElementsByTagName("h1")[1]

    console.log(secondTitle.textContent)

// ### 2. Affiche le contenu textuel du dernier li

    let list_li = document.getElementsByTagName("li")

    let last_li = list_li[list_li.length - 1];

    console.log(last_li.textContent)

// ### 3. Affiche le contenu textuel du premier p en majuscule

    let firstP = document.getElementsByTagName("p")[0]

    console.log(firstP.textContent.toUpperCase())

// ### 4. Avec l'aide d'un forEach affiche le contenu de chaque li

    // Convertir la HTMLCollection en un tableau pour utiliser forEach
    Array.from(list_li).forEach(element => {
        console.log(element.textContent);
    });

// ### bonus : affiche chaque li en majuscule

    // Convertir la HTMLCollection en un tableau pour utiliser forEach
    Array.from(list_li).forEach(element => {
        console.log(element.textContent.toUpperCase());
    });