const menuBtn = document.querySelector('.js-menu-btn')

menuBtn.addEventListener('click', e => {
  document.body.classList.toggle('menu-is-open')
})
