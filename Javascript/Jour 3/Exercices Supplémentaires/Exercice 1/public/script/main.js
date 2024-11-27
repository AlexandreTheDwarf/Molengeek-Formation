let nbr = prompt("Donne moi un nombre !")

// Convertir en nombre
nbr = Number(nbr);

if (!isNaN(nbr) == true){
    if (nbr%2 == 0){
        alert("Le nombre est pair")
    }
    else{
        alert("Le nombre est impair")
    }
}
else{
    alert("Ce n'est pas un nombre que tu as donné")
}

