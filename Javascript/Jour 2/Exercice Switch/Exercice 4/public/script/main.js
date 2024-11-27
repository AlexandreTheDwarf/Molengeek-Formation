// Demande une valeur à l'utilisateur
let nbr1 = prompt("Veuillez entrer un nombre :");
let operateur = prompt("Donne moi le signe que vous voulez (+ - * / %)")
let nbr2 = prompt("Veuillez entrer votre second nombre :");

// Conversion de l'entrée utilisateur en nombre
let numberOne = parseFloat(nbr1);
let numberTwo = parseFloat(nbr2);
let result

// Vérifie si l'entrée est un nombre
if(!isNaN(numberOne) && !isNaN(numberTwo)){
    switch (operateur) {
        case "/": 
            if (numberTwo == 0){
                alert("On ne peut pas diviser par zéro")
            }
            else{
                result = numberOne/numberTwo
                alert("la réponse de votre calcul est " + result)
            }
            break;
    
        case "+": 
            result = numberOne+numberTwo
            alert("la réponse de votre calcul est " + result)
            break;
        
        case "-": 
            result = numberOne-numberTwo
            alert("la réponse de votre calcul est " + result)
            break;

        case "*": 
            result = numberOne*numberTwo
            alert("la réponse de votre calcul est " + result)
            break;

        case "%": 
            result = numberOne%numberTwo
            alert("la réponse de votre calcul est " + result)
            break;

        default: 
            alert("l'opérateur n'est pas valide");
    }    
}
else{
    alert("Un des deux nombres n'est pas un nombre")
}
