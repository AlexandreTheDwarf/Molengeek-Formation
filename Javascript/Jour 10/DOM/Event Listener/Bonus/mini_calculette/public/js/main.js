// exo 1

let divExo1 = document.getElementById("exo-1")

let inputExo1_1 = divExo1.querySelectorAll("input")[0]
let inputExo1_2 = divExo1.querySelectorAll("input")[1]

let buttonExo1 = divExo1.querySelector("button")

let responseExo1 = document.getElementById("response1")

buttonExo1.addEventListener("click", () => {
    let x = parseInt(inputExo1_1.value)
    let y = parseInt(inputExo1_2.value)
    responseExo1.textContent = x + y
})

// Exo 2

let divExo2 = document.getElementById("exo-2")

let inputExo2_1 = divExo2.querySelectorAll("input")[0]
let inputExo2_2 = divExo2.querySelectorAll("input")[1]

let selectorExo2 = divExo2.querySelector("select")

let buttonExo2 = divExo2.querySelector("button")

let responseExo2 = document.getElementById("response2")

buttonExo2.addEventListener("click", () => {
    let x = parseInt(inputExo2_1.value)
    let y = parseInt(inputExo2_2.value)
    let z = selectorExo2.value

    switch (z) {
        case "+":
            responseExo2.textContent = x + y
            break;
        case "-":
            responseExo2.textContent = x - y
            break;
        case "/":
            if (y != 0){
                responseExo2.textContent = x / y
            }
            else{
                alert("On ne peut pas diviser par 0")
            }
            break;
        default:
            responseExo2.textContent = x * y
            break;
    } 
})

// Exo 3

let divExo3 = document.getElementById("exo-3")

let inputExo3_1 = divExo3.querySelectorAll("input")[0]
let inputExo3_2 = divExo3.querySelectorAll("input")[1]

let buttonExo3Egal = divExo3.querySelector(".fa-equals")

let buttonExo3Plus = divExo3.querySelector("button.m-1 i.fa-plus")
let buttonExo3Minus = divExo3.querySelector(".fa-minus")
let buttonExo3Times = divExo3.querySelector(".fa-times")
let buttonExo3Divide = divExo3.querySelector(".fa-divide")

let Exo3Sign = divExo3.querySelector("span i"); 

let responseExo3 = document.getElementById("response3")


buttonExo3Plus.addEventListener("click", () => {
    Exo3Sign.className = "fas fa-plus";
})

buttonExo3Minus.addEventListener("click", () => {
    Exo3Sign.className = "fas fa-minus";
})

buttonExo3Times.addEventListener("click", () => {
    Exo3Sign.className = "fas fa-times";
})

buttonExo3Divide.addEventListener("click", () => {
    Exo3Sign.className = "fas fa-divide";
})

buttonExo3Egal.addEventListener("click", () => {
    let x = parseInt(inputExo3_1.value)
    let y = parseInt(inputExo3_2.value)
    let z;
    if (Exo3Sign.classList.contains("fa-times")) z = "*";
    else if (Exo3Sign.classList.contains("fa-minus")) z = "-";
    else if (Exo3Sign.classList.contains("fa-divide")) z = "/";
    else z = "+"; 

    switch (z) {
        case "+":
            responseExo3.textContent = x + y
            break;
        case "-":
            responseExo3.textContent = x - y
            break;
        case "/":
            if (y != 0){
                responseExo3.textContent = x / y
            }
            else{
                alert("On ne peut pas diviser par 0")
            }
            break;
        default:
            responseExo3.textContent = x * y
            break;
    } 
})