function reverse(x) {
  let reverseNumber = ""; 
  x = x.toString(); 

  for (let i = x.length - 1; i >= 0; i--) { 
      reverseNumber += x[i]; 
  }

  console.log(reverseNumber); 
}

reverse(842);
