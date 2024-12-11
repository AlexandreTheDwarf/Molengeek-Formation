// Classe Lieu
class Lieu {
    constructor(nom, personnes = []) {
        this.nom = nom;
        this.personnes = personnes;
    }
}

// Instances de Lieu
let MolenGeek = new Lieu("MolenGeek");
let Snack = new Lieu("Snack");
let Maison = new Lieu("Maison", ["Alexandre", "Mathéna"]);

// Classe Personne
class Personne {
    constructor(nom, prenom, argent) {
        this.nom = nom;
        this.prenom = prenom;
        this.argent = argent;
    }

    // Méthode seDeplacer()
    seDeplacer(lieuDepart, lieuArrivee, bus = null) {
        console.log(`${this.prenom} quitte ${lieuDepart.nom} pour aller à ${lieuArrivee.nom}`);
        
        // Retirer la personne du lieu de départ
        let indexPersonne = lieuDepart.personnes.indexOf(this.prenom);
        if (indexPersonne !== -1) {
            lieuDepart.personnes.splice(indexPersonne, 1); // Retire la personne
        } else {
            console.warn(`${this.prenom} n'est pas trouvé dans ${lieuDepart.nom}.`);
        }

        if (bus) {
            bus.embarquer(this); // Utilise le bus
            bus.debarquer(this); // Descend du bus
        }

        // Ajouter la personne au lieu d'arrivée
        lieuArrivee.personnes.push(this.prenom);
    }
}

// Classe Bus
class Bus {
    constructor() {
        this.personnes = [];
        this.caisse = 0;
    }

    // Méthode embarquer()
    embarquer(personne) {
        const ticket = 2.8;
        if (personne.argent >= ticket) {
            personne.argent -= ticket; // Déduit l'argent de la personne
            this.caisse += ticket; // Ajoute à la caisse du bus
            this.personnes.push(personne.prenom); // Ajoute la personne dans le bus
            console.log(`${personne.prenom} embarque dans le bus.`);
        } else {
            console.log(`${personne.prenom} n'a pas assez d'argent pour le bus.`);
        }
    }

    // Méthode débarquer()
    debarquer(personne) {
        if (this.personnes.includes(personne.prenom)) {
            this.personnes.splice(this.personnes.indexOf(personne.prenom), 1); // Retire la personne du bus
            console.log(`${personne.prenom} descend du bus.`);
        }
    }
}

// Création des instances
let Alexandre = new Personne("Vandewiele", "Alexandre", 15);
let bus = new Bus();

// Déroulé des événements
console.log("8h00 - Maison");
console.log("Personnes à Maison :", Maison.personnes);

Alexandre.seDeplacer(Maison, MolenGeek, bus); // 8h30 - Prendre le bus
console.log("Personnes à MolenGeek :", MolenGeek.personnes);

console.log("12h45 - Sors de MolenGeek, prends le bus pour le Snack");
Alexandre.seDeplacer(MolenGeek, Snack, bus); // Prendre le bus vers le Snack
console.log("Personnes au Snack :", Snack.personnes);

console.log("13h30 - Retour à MolenGeek à pied");
Alexandre.seDeplacer(Snack, MolenGeek); // À pied
console.log("Personnes à MolenGeek :", MolenGeek.personnes);

console.log("17h10 - Sors de MolenGeek, prends le bus pour rentrer chez toi");
Alexandre.seDeplacer(MolenGeek, Maison, bus); // Prendre le bus pour rentrer
console.log("Personnes à Maison :", Maison.personnes);

// Argent final
console.log(`Argent restant d'Alexandre : ${Alexandre.argent.toFixed(2)}€`);
console.log(`Caisse du bus : ${bus.caisse.toFixed(2)}€`);
