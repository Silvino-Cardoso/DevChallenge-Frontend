var hamburguer =document.getElementById('hamburguer');
var menu = document.getElementById('menu-list');

hamburguer.addEventListener('click', () => {
    menu.classList.toggle('show');
})