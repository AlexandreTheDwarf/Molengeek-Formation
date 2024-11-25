// 1. Les réponses boléenes part 1

    // let a = prompt("Donne moi un nombre")
    // let b = prompt("Donne moi un second nombre")

    // let result = (a == b)

    // if (result == true){
    //     alert("Le nombre x et le nombre y sont-ils égaux ? Oui")
    // }
    // else {
    //     alert("Le nombre x et le nombre y sont-ils égaux ? Non")  
    // }

//  2. Les réponses boléenes part 2

    // let a = prompt("Donne moi un nombre")
    // let b = prompt("Donne moi un second nombre")

    // let result = (a < b)

    // if (result == true){
    //     alert("Le nombre x et-il plus petit que le nombre y ? Oui")
    // }
    // else {
    //     alert("Le nombre x et-il plus petit que le nombre y ? Non")  
    // }

//  3. Les réponses boléenes part 3

    // let x = prompt("Donne moi un nombre")
    // let y = prompt("Donne moi un second nombre")
    // let z = prompt("Donne moi un troisieme nombre")

    // let sum = x + y

    // let result = z > sum

    // alert("La somme du nombre " + x + " + le nombre "+ y + " est-elle plus grande que le nombre " + z + " ? " + result)

// 4.

    // let sentence = prompt("Donne moi une phrase")
    // let estimation = prompt("Combien de caractere selon toi y a t'il dans celle ci ?")

    // let result = sentence.length

    // let diff = result - estimation

    // if (diff==0){
    //     alert("Bravo ton estimation était correcte")
    // }
    // else{
    //     alert("Incorrect tu étais à " + diff + " unités de la bonne réponse !")
    // }

// 5.

    // let name = prompt("Donne moi ton nom")

    // if (name.length == 0){
    //     alert("Attention vous devez remplir le champs ci-dessous, Quel est votre prénom ?")
    //     name = prompt("Donne moi ton nom")
    // }
    // else{
    //     alert("Bonjour, "+ name)
    // }

// 6.

    // // Méthode pour répondre par l'affirmative ou la négative
    // function reponseOuiNon(question) {
    //     let reponse = prompt(question + " (Oui ou Non)").toLowerCase();
    //     return reponse === "oui" ? true : false;
    // }

    // // Fonction principale pour gérer l'abonnement
    // function gererAbonnement() {
    //     let veutSAbonner = reponseOuiNon("Souhaitez-vous vous abonner ?");
        
    //     if (veutSAbonner) {
    //         let formule = prompt("Quelle formule souhaitez-vous choisir ? Luxe ou Normal").toLowerCase();
            
    //         if (formule === "luxe") {
    //             alert("Félicitations, vous avez choisi la formule Luxe !");
    //         } else if (formule === "normal") {
    //             alert("Merci pour votre abonnement.");
    //         } else {
    //             alert("Formule non reconnue, réessayez !");
    //         }
    //     } else {
    //         let certain = reponseOuiNon("Êtes-vous certain de ne pas vouloir vous abonner ?");
            
    //         if (certain) {
    //             alert("C'est dommage, bonne journée !");
    //         } else {
    //             gererAbonnement(); // Recommence la boucle pour reproposer les formules
    //         }
    //     }
    // }

    // // Lancement du programme
    // gererAbonnement();

// 7.

    // let answerOne = prompt("Quelle est le prénom du coach ?")
    // let answerTwo = prompt("Combien d'éleve y a t'il en classe ?")

    // let soluceOne = "Quentin"
    // let soluceTwo = 7

    // if (answerOne == soluceOne && answerTwo == soluceTwo){
    //     alert("Quelle connaissance :o")
    // }
    // else if (answerOne != soluceOne && answerTwo == soluceTwo){
    //     alert("Tu y es presque tu as eu mauvais a la question 1")
    // }
    // else if (answerOne == soluceOne && answerTwo != soluceTwo){
    //     alert("Tu y es presque tu as eu mauvais a la question 2")
    // }
    // else{
    //     alert("Tu es sur d'etre un eleve a charlewood-coding ?")
    // }

// 8.

    // let age = prompt("Quelle est ton age ?")

    // if (age > 18 && age < 100){
    //     alert("Vous etes majeur, bon film")
    // }
    // else if (age < 18 && age > 0){
    //     alert("Vous etes mineurs, l'accès est réservé au grand")
    // }
    // else if (age == 18 ){
    //     alert("Vous pouvez rentrer mais c’est tout juste, n'oubliez pas que ce film peut être choquant.")
    // }
    // else if (age >= 100){
    //     alert("Vous êtes encore vivant ? Évitez de voir ce film pour le rester.")
    // }
    // else{
    //     alert("Vous n’êtes même pas nés, n’essayez pas de tricher")
    // }

// 8. Bonus :

    // let birthyear = prompt("Quelle est ton année de naissance ?")

    // let age = 2024 - birthyear

    // if (age > 18 && age < 100){
    //     alert("Vous etes majeur, bon film")
    // }
    // else if (age < 18 && age > 0){
    //     alert("Vous etes mineurs, l'accès est réservé au grand")
    // }
    // else if (age == 18 ){
    //     alert("Vous pouvez rentrer mais c’est tout juste, n'oubliez pas que ce film peut être choquant.")
    // }
    // else if (age >= 100){
    //     alert("Vous êtes encore vivant ? Évitez de voir ce film pour le rester.")
    // }
    // else{
    //     alert("Vous n’êtes même pas nés, n’essayez pas de tricher")
    // }

// 9.

    // let rich = prompt("est-ce que vous êtes riche ?", "non")
    
    // let holydays = prompt("voulez-vous partir en vacance ?", "non")
    
    // let cat = prompt("Est-ce que vous avez un chat ?", "non")

    // if (holydays != "oui"){
    //     alert("pas de problème, ne partez pas en vacance")
    // }
    // else if (cat == "oui" || rich == "non"){
    //     alert("Même si vous le voulez, vous ne pouvez pas partir.")
    // }
    // else if (cat != "oui" && rich == "oui" && holydays != "non"){
    //     alert("Tout est parfait, partez en vacance !")
    // }
    // else if (cat != "oui" && rich == "oui"){
    //     alert("Vous pourriez partir en vacance si vous le voulez")
    // }
    