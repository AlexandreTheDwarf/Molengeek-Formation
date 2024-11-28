let word = "Bonjour à tous";
let wordUpper = ""; 

for (let i = 0; i < word.length; i++) {
    if (i % 2 === 0) { 
        wordUpper += word[i].toUpperCase();
    } else {
        wordUpper += word[i]; 
    }
}

console.log(wordUpper);