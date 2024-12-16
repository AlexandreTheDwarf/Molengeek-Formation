let myBody = document.body; 
console.log(myBody.firstElementChild); 
console.log(myBody.lastElementChild); 

let firstDiv = document.getElementsByTagName("div")[0]
let exo4 = firstDiv.firstElementChild
console.log(exo4)

let firstLi = document.getElementsByTagName("li")[0]
console.log(firstLi.nextElementSibling)

let SecondLi = document.getElementsByTagName("li")[1]
console.log(SecondLi.previousElementSibling)
