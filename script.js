const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('navUL');
const header = document.getElementById('navbar');
const headerContainer = document.getElementById('hc');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
    header.classList.toggle('show');
    headerContainer.classList.toggle('show');
});

document.getElementById("year").innerHTML = new Date().getFullYear();