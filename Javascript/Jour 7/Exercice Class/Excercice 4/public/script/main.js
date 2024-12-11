// Classe Objet
class Objet {
    constructor(nom, prix) {
        this.nom = nom;
        this.prix = prix; // Corrigé ici
    }
}

// Création des objets
let livre = new Objet("livre", 7.9);
let jeux = new Objet("Magic Arena", 50);

// Boîte contenant les objets
let boite = [livre, jeux];

// Classe Personnage
class Personnage {
    constructor(nom, argent) {
        this.nom = nom;
        this.sac = []; 
        this.argent = argent; 
    }

    // Méthode pour prendre un objet dans la boîte
    prendre(objet) {
        if (boite.includes(objet)) {
            this.sac.push(objet); // Ajoute l'objet dans le sac
            let index = boite.indexOf(objet);
            boite.splice(index, 1); // Retire l'objet de la boîte
            console.log(`${this.nom} a pris ${objet.nom}`);
        } else {
            console.log(`${objet.nom} n'est pas dans la boîte.`);
        }
    }

    // Méthode pour acheter un objet à un autre personnage
    acheter(vendeur, objet) {
        if (vendeur.sac.includes(objet) && this.argent >= objet.prix) {
            vendeur.sac.splice(vendeur.sac.indexOf(objet), 1); // Retire l'objet du sac du vendeur
            this.sac.push(objet); // Ajoute l'objet dans le sac de l'acheteur
            this.argent -= objet.prix; // Déduit le prix de l'acheteur
            vendeur.argent += objet.prix; // Ajoute le prix au vendeur
            console.log(
                `${this.nom} a acheté ${objet.nom} de ${vendeur.nom} pour ${objet.prix}€`
            );
        } else {
            console.log(`${this.nom} ne peut pas acheter ${objet.nom}.`);
        }
    }
}

// Création des personnages
let maxime = new Personnage("Maxime", 100);
let alex = new Personnage("Alex", 50);

// Actions
maxime.prendre(livre); // Maxime prend le livre
alex.prendre(jeux); // Alex prend le jeu

// Achat d'un objet
maxime.acheter(alex, jeux); // Maxime achète le jeu à Alex
