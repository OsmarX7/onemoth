document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("nav");
    const ul = document.getElementById("ul");
    const burger = document.getElementById("burger");

    burger.addEventListener("click", () => {
        nav.classList.toggle("expanded");
        ul.classList.toggle("not");
    })
})