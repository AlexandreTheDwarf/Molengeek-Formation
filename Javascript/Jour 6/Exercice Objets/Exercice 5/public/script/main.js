// Exo 7

let vieille_dame = {
    age: 89,
    nom: {
        prénom: "Henriette",
        nom: "Durant",
    },
    moral: "mal",
    objet: "Ak-47",
    parler(x) {
        if (this.moral === "mal") {
            alert("Cours petit con, où je te flingue avec une rafale de mon " + this.objet);
        } else {
            alert("Bonjour " + x.nom.prénom + " " + x.nom.nom + " !");
        }
    },
};

let vieille_homme = {
    age: 896,
    nom: {
        prénom: "Sergio",
        nom: "Pagani",
    },
    adoucir() {
        alert("Wololololo !");
        vieille_dame.moral = "bien";
    },
};

vieille_dame.parler(vieille_homme); 
vieille_homme.adoucir();            
vieille_dame.parler(vieille_homme); 
