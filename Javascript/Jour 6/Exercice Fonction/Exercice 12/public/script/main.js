function logIn()  {
    let psw= ""
    
    do {
      psw = prompt("Quelle est ton mot de passe ?")
    } while (psw !== "mdp")

    alert("Vous êtes connecté")
}

logIn()

