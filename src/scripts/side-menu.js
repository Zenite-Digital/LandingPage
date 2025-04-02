document.addEventListener("DOMContentLoaded", function() { 
    const toggleSideMenuBtn = document.getElementById("toggle-side-menu-btn");
    const sideMenu = document.getElementById("side-menu");
    
    toggleSideMenuBtn.addEventListener("click", function() {
        if (sideMenu.style.width === "0px" || sideMenu.style.width === "") {
            openNav();
        } else {
            closeNav();
        }
    });
})

function openNav(){
    document.getElementById("side-menu").style.width = "280px";
    document.getElementById("side-menu").style.transition = "width 0.5s";
}

function closeNav(){
    document.getElementById("side-menu").style.width = "0";
    document.getElementById("side-menu").style.transition = "width 0.5s";
}