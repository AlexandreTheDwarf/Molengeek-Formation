// 1.

let firstButton = document.querySelectorAll("input")[0]

let FirstList = document.querySelector("ul")

firstButton.addEventListener("click", () => {
    FirstList.firstElementChild.remove();
});

// 2.

let secondButton = document.querySelectorAll("input")[1]

secondButton.addEventListener("click", () => {
    FirstList.lastElementChild.remove();
});

// 3.

let thirdButton = document.querySelectorAll("input")[2]

thirdButton.addEventListener("click", () => {
    let children = FirstList.children; 
    let length = children.length; 

    let randomIndex = Math.floor(Math.random() * length);
    FirstList.removeChild(children[randomIndex]); 
});

// 4.

let NewListe = document.createElement("li")
let NewListeText = document.createTextNode("Bonne année a tous !")

NewListe.appendChild(NewListeText)

let SecondList = document.querySelectorAll("ul")[1]

let Exo4Button = document.querySelectorAll("input")[3]

Exo4Button.addEventListener("click", () => {
    SecondList.replaceChild(NewListe, SecondList.children[1]);
});

// 5.

let Exo5Button = document.querySelectorAll("input")[5]

let Exo5Input = document.querySelectorAll("input")[4]

Exo5Button.addEventListener("click", () => {
    let CreateList = document.createElement("li")
    let TextCreateList = document.createTextNode(Exo5Input.value)

    CreateList.appendChild(TextCreateList)

    SecondList.replaceChild(CreateList, SecondList.children[2])
})