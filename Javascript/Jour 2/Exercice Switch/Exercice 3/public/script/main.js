// Demande une valeur à l'utilisateur
let userInput = prompt("Veuillez entrer un nombre :");

// Conversion de l'entrée utilisateur en nombre
let userNumber = parseFloat(userInput);

// Vérifie si l'entrée est un nombre
switch (true) {
    case isNaN(userNumber): 
        alert("Ceci n'est pas un nombre");
        break;

    case userNumber % 2 === 0: 
        alert("Le nombre est un multiple de 2");
        break;

    default: 
        alert("Le nombre n'est pas un multiple de 2");
}
