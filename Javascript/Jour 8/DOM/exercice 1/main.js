let title = document.getElementsByTagName("h1")
console.log(title[0].outerHTML)
console.log(title[1].outerHTML)

let paragraph = document.getElementsByTagName("p")

let title3_one = document.querySelector("h3")
console.log(title3_one.outerHTML)
let title3_two = document.querySelectorAll("h3")[1]
console.log(title3_two.outerHTML)
let title3_three = document.querySelectorAll("h3")[2]
console.log(title3_three.outerHTML)

let paragraph_two = document.getElementsByTagName("p")[1]
console.log(paragraph_two.outerHTML)

let liste = document.getElementsByTagName("li")

let liste_three = document.getElementsByTagName("li")[2]
console.log(liste_three.outerHTML)