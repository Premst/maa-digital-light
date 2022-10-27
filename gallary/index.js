const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const center_menu = document.getElementById('center_menu');
openMenu.addEventListener('click', () => {
    center_menu.classList.add('openMenu');
});
closeMenu.addEventListener('click', () => {
    center_menu.classList.remove('openMenu');
});