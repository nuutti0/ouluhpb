const collapsible = document.querySelector(".collapsible-nav");
const open = document.querySelector(".open");
const close = document.querySelector(".close");

open.addEventListener("click", () => {
    collapsible.classList.toggle("active-nav");
    open.classList.toggle("active");
    close.classList.toggle("active");
});

close.addEventListener("click", () => {
    collapsible.classList.toggle("active-nav");
    open.classList.toggle("active");
    close.classList.toggle("active");
});