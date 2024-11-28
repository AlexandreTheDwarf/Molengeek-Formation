let student = ["fabian", "corenthin", "alexandre", "adrian", "jordan", "pauline"];

let studentUpp = [];

student.forEach(element => {
    // Mettre la première lettre en majuscule et la dernière en majuscule
    let transformed = element[0].toUpperCase() + element.slice(1, element.length - 1) + element[element.length - 1].toUpperCase();
    // Ajouter au tableau `studentUpp`
    studentUpp.push(transformed);
});

console.log(studentUpp);
