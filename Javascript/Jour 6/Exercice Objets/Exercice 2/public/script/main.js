// Exo 1

let Personnage = {
    nom : "Vandewiele",
    prenom :  "Alexandre",
    sePresenter () {
        console.log ("Bonjour, je m'appelle " + this.nom + " " + this.prenom ) 
    }
}

Personnage.sePresenter();