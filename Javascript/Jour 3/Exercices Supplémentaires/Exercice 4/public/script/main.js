let letter = prompt("Donne moi une lettre !");

letter = letter.toLowerCase();

// Vérification : si l'entrée est une lettre et une seule lettre en utilisant un regex
if (/^[a-z]$/.test(letter)) {
    // Vérifier si c'est une voyelle
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
        alert("C'est une voyelle.");
    } else {
        alert("C'est une consonne.");
    }
} else {
    alert("La valeur donnée n'est pas une lettre ou est plus longue qu'une seule lettre.");
}

