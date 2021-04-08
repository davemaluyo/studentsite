document.addEventListener('DOMContentLoaded', function() {

    //toggle nav mobile menu for small screens
    const menubutton = document.querySelector(".menu-button")
    const menunav = document.querySelector(".toggle-nav")
    menubutton.addEventListener("click", function () {
        if (menunav.getAttribute("data-navstate") === "open") {
            menunav.setAttribute("data-navstate", "closed");
        } else {
            menunav.setAttribute("data-navstate", "open");
        };
    });


});