let donnees = [14, 7, 97, {}, "247", 67, 101, true, 34, 78, [], 'coding school', 0, 11, 32, "italie", 61, null, 'cent', 100];

let typeString = [];
let typeNumber = [];
let typeObject = [];
let typeAutre = [];

donnees.forEach(element => {
    switch (typeof element) {
        case "string":
            typeString.push(element);
            break;
        case "number":
            typeNumber.push(element);
            break;
        case "object":
            typeObject.push(element);
            break;   
        default:
            typeAutre.push(element);
    }
});

console.log("String elements:", typeString);
console.log("Number elements:", typeNumber);
console.log("Object elements:", typeObject);
console.log("Other elements:", typeAutre);
