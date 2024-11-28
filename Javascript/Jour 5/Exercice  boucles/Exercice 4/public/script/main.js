let student = ["Fabian", "Corenthin", "Alexandre", "Adrian", "Jordan", "Pauline" ]

let longPrenoms = []

student.forEach(element => {
    if (element.length >= 7){
        longPrenoms.push(element)
    }
});

console.log (longPrenoms)