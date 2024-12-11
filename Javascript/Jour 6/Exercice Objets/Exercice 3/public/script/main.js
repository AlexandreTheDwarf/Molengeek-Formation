// Exo 5

let Personnage = {
    nom : "Vandewiele",
    prenom :  "Alexandre",
    age : "21",
    ageSwap () {
        this.age = prompt("Quelle age a t il ?")
        alert (this.age)
    }
}

Personnage.ageSwap();