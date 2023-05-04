const menuIcon = document.getElementById("menu-bar");
const navbar = document.querySelector("nav");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
})