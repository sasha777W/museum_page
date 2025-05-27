const menuToggle = document.querySelector('.baseline-menu');
const closeBtns = document.querySelectorAll('.baseline-close--tablet, .baseline-close--phone');
const menu = document.querySelector('.page__menu');
const overlay = document.querySelector('.overlay');
const body = document.body;

function openMenu() {
  menu.classList.add('open');
  body.classList.add('menu-open');
}

function closeMenu() {
  menu.classList.remove('open');
  body.classList.remove('menu-open');
}

menuToggle.addEventListener('click', (e) => {
  e.preventDefault();
  openMenu();
});

closeBtns.forEach(btn => {
  btn.addEventListener('click', closeMenu);
});

overlay.addEventListener('click', closeMenu);

const menuLinks = document.querySelectorAll('.page__menu a');
menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu); 
});

// theme switcher

const page = document.querySelector('.page');
const switcher = document.querySelector('.page__theme-switcher');

switcher.addEventListener('click', () => {
  page.classList.toggle('dark--theme');
});

