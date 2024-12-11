// Exo 1

let Alexandre = {
    nom : "Vandewiele",
    prenom :  "Alexandre",
    age : 30 ,
    taille : 172 ,
}

console.log(Alexandre.age)

// Exo 2

let Pierre = {
    nom : "Nowel",
    prenom :  "Pierre",
    age : 22 ,
    taille : 122 ,
}

let Nul = {
    nom : null,
    prenom : null,
    age : null,
    taille : null,
}

// Exo 3

Nul.nom = Alexandre.nom
Nul.age = Pierre.age
Nul.taille = Pierre.taille