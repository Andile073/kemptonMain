// Navbar background change on scroll
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    navbar.style.background = window.scrollY > 50 
        ? "rgba(15,23,42,0.95)" 
        : "rgba(15,23,42,0.7)";
});
