const hamburger = document.querySelector('.header .nav__bar .nav__list .hamburger');
const mobile__menu = document.querySelector('.header .nav__bar .nav__list ul');
const menu_item = document.querySelectorAll('.header .nav__bar .nav__list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile__menu.classList.toggle('active');
});

document.addEventListener('scroll',() => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile__menu.classList.toggle('active');
    });
});