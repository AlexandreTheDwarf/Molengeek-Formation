function divPar2(x) {
    if (!isNaN(x)){
      if (x%2 == 0){
        console.log (x + " est divisbile par 2")
      }
      else{
        console.log(x + " n'est divisbile par 2")
      }
    }
    else{
      console.log(x + " n'est pas un nombre")
    }
}

divPar2(842);
divPar2("3")
