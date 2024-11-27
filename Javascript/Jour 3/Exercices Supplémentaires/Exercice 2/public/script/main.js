let x = prompt("Donne moi un nombre !")
let y = prompt("Donne moi un autre nombre !")

// Convertir en nombre
x = Number(x);
y = Number(y);

if (!isNaN(x) == true && !isNaN(y) == true){
    if (x != y){
        let result = Math.max(x, y)
        alert("Le plus grand nombre est " + result)
    }
    else{
        alert("Les deux nombres sont égaux.")
    }
}
else{
    alert("Une des deux valeurs ou les deux n'est pas un nombre")
}

