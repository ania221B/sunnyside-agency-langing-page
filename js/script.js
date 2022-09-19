const menuBtn = document.querySelector('.js-menu-btn')

menuBtn.addEventListener('click', e => {
  document.body.classList.toggle('menu-is-open')
})

document.body.addEventListener('click', e => {
  if (document.body.classList.contains('menu-is-open')) {
    if (!e.target.closest('.js-nav__list') && !e.target.closest('.js-menu-btn')) {
      document.body.classList.remove('menu-is-open')
    }
  }
})
