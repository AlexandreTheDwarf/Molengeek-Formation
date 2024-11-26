let phrase = "Bonjour tout le monde         "

// - Affichez la longueur de la phrase.

    // console.log(phrase.length);

// - Retirez les espaces à la fin de la phrase à l'aide d'une méthode.

    // phrase = phrase.trimEnd()

// - Réaffichez la longueur de la phrase après avoir retiré les espaces.

    // console.log(phrase.length);

// - Affichez uniquement la dernière lettre de la phrase.

    // console.log(phrase.at((phrase.length)-1))

// - Retirez "Bonjour" de la phrase.

    // phrase = phrase.replace(/Bonjour/i, "");
    // console.log(phrase)

// - Replacez "Bonjour" au début de la phrase grâce à une méthode.

    // phrase = "Bonjour".concat(phrase) 
    // console.log(phrase)

// - Supprimez tout de la phrase sauf "Bonjour" à l'aide d'une méthode.

    // phrase = phrase.replace(/^(Bonjour).*/, "$1");  
    // console.log(phrase)

// - Remplacez dans la phrase le mot "Bonjour" par le mot "string".

    // phrase = phrase.replace(/Bonjour/i, "string");
    // console.log(phrase)

// - Mettez en majuscules la 5ème et la 7ème lettre de la variable phrase, tout en conservant le reste en minuscules.

    // // Transformez toute la chaîne en minuscules
    // phrase = phrase.toLowerCase();

    // // Mettez la 5ème et la 7ème lettre en majuscules
    // phrase = phrase
    //     .slice(0, 4) + 
    //     phrase[4].toUpperCase() + 
    //     phrase.slice(5, 6) + 
    //     phrase[6].toUpperCase() + 
    //     phrase.slice(7); 

    // console.log(phrase);

// - Trouvez l'index de la 2ème occurrence de la lettre "O" dans le mot "Bonjour".

    // console.log(phrase.indexOf("o", 2));

// - Définissez une variable nom avec votre nom et mettez la première et la dernière lettre en majuscule grâce à des méthodes.

    // let name = "vandewiele";

    // // Transformez la première et la dernière lettre en majuscules
    // name =
    //     name.charAt(0).toUpperCase() + // Première lettre en majuscule
    //     name.slice(1, -1) + // Lettres entre la première et la dernière
    //     name.charAt(name.length - 1).toUpperCase(); // Dernière lettre en majuscule

    // console.log(name);