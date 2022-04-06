function init() {
    setMenuActive();
}

init();


function setMenuActive() {
    if (document.body.classList) {
        if (window.location.pathname == "/") {
            const menuItemOne = document.querySelector('nav a:nth-child(1)')
            menuItemOne.classList.add('active');
        } else if (window.location.pathname == "/resultaten") {
            const menuItemTwo = document.querySelector('nav a:nth-child(2)')
            menuItemTwo.classList.add('active');
        } else if (window.location.pathname == "/admin") {
            const menuItemThree = document.querySelector('nav a:nth-child(3)')
            menuItemThree.classList.add('active');
        }
    }
}