// ### 1. Au double clique du h1, son fond devient rouge et son texte devient blanc

let titleOne = document.querySelector("h1")

titleOne.addEventListener("dblclick", () => {
    titleOne.style.backgroundColor = "red"
    titleOne.style.color = "white"
})

// ### 2. Au hover du h3, son texte rétrécit d'un caractère 

let titleThree = document.querySelector("h3");

titleThree.addEventListener("mouseover", () => {
    let currentSize = window.getComputedStyle(titleThree).fontSize;
    let newSize = parseFloat(currentSize) - 1; // Réduit la taille de 1px
    titleThree.style.fontSize = newSize + "px";
});

// ### 3. Quand on clique sur le paragraphe le fond devient bleu et le texte gold, mais si le fond et déjà bleu et le texte déjà gold alors le fond redevient blanc et le texte noir

let paragraphe = document.querySelector("p")

paragraphe.addEventListener("click", () => {
    if(paragraphe.style.backgroundColor == "blue"){
        paragraphe.style.backgroundColor = "white"
        paragraphe.style.color = "black"
    }
    else{
        paragraphe.style.backgroundColor = "blue"
        paragraphe.style.color = "gold"
    }
})