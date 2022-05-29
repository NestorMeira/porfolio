window.addEventListener("scroll", function() {
    const floatingHeader = document.getElementById("floatingHeader");
    floatingHeader.classList.toggle("sticky", window.scrollY > 20);
});