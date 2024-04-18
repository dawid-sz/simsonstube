// function to show the menu section on click and also change the background to black

function hamburgerMenu() {
    const menu = document.getElementById('myLinks');
    const leiste = document.getElementById('homeBtn');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        leiste.style.background = 'none';
    } else {
        menu.style.display = 'block';
        menu.style.background = 'black';
        leiste.style.background = 'black';
    }
}