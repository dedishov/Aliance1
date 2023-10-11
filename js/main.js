const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.logo-svg use');
const mMenuToggle = document.querySelector('.mobile-menu-toggle');
const menu = document.querySelector('.mobile-menu');

const lightModeOn = (event) => {
  navbar.classList.add('navbar-light');
  logo.href.baseVal = 'img/sprite.svg#logo';
};
const lightModeOff = (event) => {
  navbar.classList.remove('navbar-light');
  logo.href.baseVal = 'img/sprite.svg#logo-light';
};

const openMenu = (event) => { // Функция открывания меню
  menu.classList.add('is-open'); // Вешает класс is-open
  document.body.style.overflow = 'hidden' // Запрещаем прокрутку сайта под меню
  lightModeOn();
};
const closeMenu = (event) => { // Функция закрывания меню
  menu.classList.remove('is-open'); // Убирает класс is-open
  document.body.style.overflow = '' // возвращает прокрутку сайта под меню
  lightModeOff();
};

window.addEventListener('scroll', () => {
  this.scrollY > 1 ? lightModeOn() : lightModeOff();
});

mMenuToggle.addEventListener('click', (event) => {
  event.preventDefault();
  if (menu.classList.contains('is-open')) { // если меню открыто...
    closeMenu(); // закрыть меню
  } else { // иначе...
    openMenu(); // открыть меню
  }
});