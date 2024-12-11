class Personne {
    constructor ( age, nom, ville){
        this.age = age;
        this.nom = nom;
        this.ville = ville;
        this.sePresenter = () =>{
            console.log(`Bonjour, je suis ${this.nom}`)
        }
    }
}

let alexandre = new Personne ("30", "Alexandre", "Lodelinsart")
let fabian = new Personne ("28", "Fabian", "Farciennes")

alexandre.sePresenter()
fabian.sePresenter()