class Personne {
    constructor ( nom, age){
        this.nom = nom;
        this.age = age;
        this.introduce = () =>{
            console.log(`Je m'appelle ${this.nom} et j'ai ${this.age} ans`)
        }
    }
}

class Student extends Personne {
    constructor (nom, age, school){
        super(nom, age);
        this.school = school;
        this.study = () => {
            console.log(`${this.nom} étudie à ${this.school}`)
        }
    }
}

let Alexandre = new Student ("Alexandre", 30, "Charlewood")
Alexandre.introduce()
Alexandre.study()