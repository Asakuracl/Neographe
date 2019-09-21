//hidden form
const form = document.querySelector("#formul");
form.style.display = "none";

const touche = document.querySelector(".back");
touche.addEventListener("click", function () {
    form.style.display = "block";
});

