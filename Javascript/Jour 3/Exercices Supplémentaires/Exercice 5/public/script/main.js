let years = prompt("Donne moi une année");

// Convertir en nombre
years = Number(years);

// Vérifier si c'est un nombre valide
if (!isNaN(years)) {
    // Vérification de l'année bissextile
    if ((years % 4 === 0 && years % 100 !== 0) || years % 400 === 0) {
        alert("L'année est bissextile.");
    } else {
        alert("L'année n'est pas bissextile.");
    }
} else {
    alert("La valeur donnée n'est pas un nombre.");
}
