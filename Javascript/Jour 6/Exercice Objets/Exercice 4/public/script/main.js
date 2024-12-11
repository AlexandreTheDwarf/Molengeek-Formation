// Exo 5

let Abdel = {
    nom : "Kadir",
    prenom :  "Abdel",
    age : "21",
    panier : [
        "pomme", "carrotte", "coca"
    ],
    dérobe (x) {
        x.panier.splice(-2)
        console.log(x.panier)
    }
}

let sergio = {
    nom : "Pacalini",
    prenom :  "Sergio",
    age : "25",
    panier : [
        "poire", "bannane", "pates"
    ]
}

Abdel.dérobe(sergio)