function calculette (x,op,y){
    if (!isNaN(x) && !isNaN(y)){
        switch(op) {
            case "+":
              console.log(x+y)
              break;
            case "-":
                console.log(x-y)
              break;
            case "*":
                console.log(x*y)
              break;
            case "/":
                console.log(x/y)
              break;
            case "%":
                console.log(x%y)
              break;
            default:
              console.log("Operateur non valide")
          }
    }
    else {
        console.log("L'un des deux nombres n'est pas un nombre")
    }
    
}

calculette("alexandre", "/", 5)
calculette(3, "*" , 9)
calculette(2, "-" , 1)
calculette(5, "/" , 2)
calculette(9, "+" , 4)
calculette(4, "%" , 2)