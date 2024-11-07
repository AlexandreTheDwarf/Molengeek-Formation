document.addEventListener("DOMContentLoaded", function() {
    const button1 = document.getElementById("button-1");
    const button2 = document.getElementById("button-2");
    const button3 = document.getElementById("button-3");
    const cardFlurry = document.getElementById("card-flurry");
    const cardCBO = document.getElementById("card-CBO");
    const cardSmart = document.getElementById("card-mcsmart");
    const caroussel = document.getElementById("caroussel");

    // Affiche la bonne carte et modifie la couleur de fond en fonction du bouton radio sélectionné
    button1.addEventListener("change", function() {
        if (button1.checked) {
            cardFlurry.style.display = "flex";
            cardCBO.style.display = "none";
            cardSmart.style.display = "none";
            caroussel.style.backgroundColor = "blue";
        }
    });

    button2.addEventListener("change", function() {
        if (button2.checked) {
            cardFlurry.style.display = "none";
            cardCBO.style.display = "flex";
            cardSmart.style.display = "none";
            caroussel.style.backgroundColor = "green";
        }
    });

    button3.addEventListener("change", function() {
        if (button3.checked) {
            cardFlurry.style.display = "none";
            cardCBO.style.display = "none";
            cardSmart.style.display = "flex";
            caroussel.style.backgroundColor = "yellow";
        }
    });
});
