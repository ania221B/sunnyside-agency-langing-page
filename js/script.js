const menuBtn = document.querySelector('.js-menu-btn')
const nav = document.querySelector('#primary-navigation')

function openMenu () {
  menuBtn.setAttribute('aria-expanded', 'true')
  nav.setAttribute('data-state', 'opened')
}

function closeMenu () {
  menuBtn.setAttribute('aria-expanded', 'false')
  nav.setAttribute('data-state', 'closing')
}

menuBtn.addEventListener('click', e => {
  const isOpened = menuBtn.getAttribute('aria-expanded') === 'true'
  isOpened ? closeMenu() : openMenu()

  document.body.addEventListener(
    'animationend',
    e => {
      if (e.animationName === 'dropOpacity') {
        nav.setAttribute('data-state', 'closed')
      }
    },
    { once: true }
  )
})

document.body.addEventListener('click', e => {
  const isOpened = menuBtn.getAttribute('aria-expanded') === 'true'
  if (isOpened) {
    if (
      !e.target.closest('.js-nav__list') &&
      !e.target.closest('.js-menu-btn')
    ) {
      closeMenu()
    }
  }

  document.body.addEventListener(
    'animationend',
    e => {
      if (e.animationName === 'dropOpacity') {
        nav.setAttribute('data-state', 'closed')
      }
    },
    { once: true }
  )
})
