// JavaScript for Temple Album (temples.js)

document.addEventListener("DOMContentLoaded", function () {
    // Footer Date Updates
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

    // Hamburger Menu Toggle
    const menuBtn = document.getElementById("menu-btn");
    const navMenu = document.getElementById("nav-menu");

    menuBtn.addEventListener("click", function () {
        if (navMenu.style.display === "flex") {
            navMenu.style.display = "none";
            menuBtn.textContent = "☰"; // Show hamburger icon
        } else {
            navMenu.style.display = "flex";
            menuBtn.textContent = "✖"; // Show close (X) icon
        }
    });
});
