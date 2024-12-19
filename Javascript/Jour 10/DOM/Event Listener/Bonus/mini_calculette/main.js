// exo 1

console.log('yellow')

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
let buttonExo3Minus = divExo3.querySelector("button.m-1 i.fa-minus")
let buttonExo3Times = divExo3.querySelector("button.m-1 i.fa-times")
let buttonExo3Divide = divExo3.querySelector("button.m-1 i.fa-divide")

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

//  Exo 4

let numbersExo4 = document.getElementById("numbersExo4")
let divExo4 = document.getElementById("exo-4")

let Exo4Button = numbersExo4.querySelectorAll("button")
let Exo4Sign = document.getElementById("Exo4Sign") 

let Exo4Input1 = Exo4Sign.parentElement.previousElementSibling
let Exo4Input2 = Exo4Sign.parentElement.nextElementSibling

const buttonExo4Plus = document.querySelector("#btnExo4Plus")
let buttonExo4Minus = document.getElementById("btnExo4Minus")
let buttonExo4Times = divExo4.querySelector("button.m-1 i.fa-times")
let buttonExo4Divide = divExo4.querySelector("button.m-1 i.fa-divide")

console.log('yellow')

buttonExo4Plus.addEventListener("click", () => {
    Exo4Sign.className = "fas fa-plus";
})

buttonExo4Minus.addEventListener("click", () => {
    Exo4Sign.className = "fas fa-minus";
})

buttonExo4Times.addEventListener("click", () => {
    Exo4Sign.className = "fas fa-times";
})

buttonExo4Divide.addEventListener("click", () => {
    Exo4Sign.className = "fas fa-divide";
})


Exo4Button.forEach(element => {
    element.addEventListener("click", () => {
        if (Exo4Input1.value == ""){
            Exo4Input1.value = element.textContent.trim()
        }
        else{
            Exo4Input2.value = element.textContent.trim()
        }
    })
});
