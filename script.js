window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('header__menu_active');
    });
})