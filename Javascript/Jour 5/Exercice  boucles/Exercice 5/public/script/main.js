let sommes = [14, 7 , 97, 65 , 247 , 67 , 101 , 4 , 34 ,78 , 1 ,900 , 0, 11 , 32 , 23 , 61];

let grossesSommes = []

sommes.forEach(element => {
    if (element > 60){
        grossesSommes.push(element)
    }
});

console.log (grossesSommes)