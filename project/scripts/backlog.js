// Hamburger menu
const menu = document.querySelector("#menu");
const navigation = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menu.classList.toggle("open");
});


// Footer
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;