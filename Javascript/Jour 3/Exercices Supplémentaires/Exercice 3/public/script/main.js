let x = prompt("Donne moi un nombre !")

// Convertir en nombre
x = Number(x)

if (!isNaN(x) == true){
    if (Math.sign(x) == 1){
        alert("Le nombre est positif.")
    }
    else if (Math.sign(x) == -1){
        alert("Le nombre est négatif.")
    }
    else{
        alert("Le nombre est nul.")
    }
}
else{
    alert("La valeur donnée n'est pas un nombre")
}

