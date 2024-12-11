class lieux {
    constructor ( nom, contenu, ingredient){
        this.nom = nom;
        this.contenu = contenu;
        this.ingredient = ingredient;
    }
}

class ingredient {
    constructor (nom, etat, prix){
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}

class Personne {
    constructor (nom, lieu, argent, panier){
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.panier = panier;
        this.seDeplacer = (x) => {
            console.log(`${this.nom} se déplace vers ${this.lieu} à ${x} km`)
        }
        this.payer = (x) => {
            this.argent = argent - x
            console.log(`Aprés avoir payer ses courses d'une valeur de ${x}, il lui reste ${this.argent}`)
        }
        this.couper = (x,y) => {
            console.log(`${this.nom} a utilisé ${x} pour découper ${y}`)
        }
    }
}

let maison = new lieux("maison", [])
let epicerie = new lieux("epicerie", [], [])

let poivron = new ingredient("poivron", "entier", 1)
let oignon = new ingredient("oignon", "entier", 2)
let oeuf = new ingredient("oeuf", "entier", 4)
let epice = new ingredient("epcie", "moulu", 3.25)
let paprika = new ingredient("paprika","moulu" , 1.5)
let fromage = new ingredient("fromage", "coupé", 1.6)

let maxime = new Personne("Maxime", "néant", 100, [])

maxime.seDeplacer(5)
maxime.payer(15)
maxime.couper("cuillere", "titouan")