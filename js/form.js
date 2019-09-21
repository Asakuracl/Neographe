//hidden form
const menu = document.querySelector(".menu");
const form = document.querySelector(".container");

menu.addEventListener("click", function () {
    form.classList.toggle("inForm");
});
