document.addEventListener("DOMContentLoaded", function () {
    const sideMenuContainer = document.getElementById(
        "side-menu-nav-container"
    );
    const toggleSideMenuBtn = document.getElementById("toggle-side-menu-btn");
    const sideMenu = document.getElementById("side-menu");

    toggleSideMenuBtn.addEventListener("click", function () {
        if (sideMenu.style.width === "0px" || sideMenu.style.width === "") {
            sideMenuContainer.style.display = "block";
            openNav();
        } else {
            closeNav();
        }
    });
});

function openNav() {
    document.getElementById("side-menu-nav-container").style.display = "block";
    document.getElementById("side-menu").style.width = "280px";
    document.getElementById("side-menu").style.transition = "width 0.5s";
}

function closeNav() {
    document.getElementById("side-menu-nav-container").style.display = "none";
    document.getElementById("side-menu").style.width = "0";
    document.getElementById("side-menu").style.transition = "width 0.5s";
}

window.SideMenu = {
    closeNav,
};
