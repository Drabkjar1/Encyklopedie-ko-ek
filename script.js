document.querySelector('#menu-btn').addEventListener('click', () => {
  document.querySelector('#menu').classList.toggle('menu__closed');
  document.querySelector('#menu-btn').classList.toggle('menu-btn-closed');
  document
    .querySelector('.header_content')
    .classList.toggle('header_content_nonvisible');
});
