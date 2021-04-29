const navButton = document.querySelector('#hamburger')
const navMenu = document.querySelector('.nav-menu')
const links = document.querySelectorAll('.link-menu')
const icons = document.querySelectorAll('.social-icon')
const faq = document.querySelectorAll('.faq')
let i
let c
let p

const showNav = () => {
    navButton.classList.toggle('bx-x')
    navMenu.classList.toggle('hide')

    for (i = 0; i < links.length; i++) {
        links[i].classList.toggle('animate__flipInX')
    }

    for (c = 0; c < icons.length; c++) {
        icons[c].classList.toggle('animate__flipInX')
    }
}

const setClick = (px) => {
    for (i = 0; i < links.length; i++) {
        if (px.matches) {
            links[i].setAttribute('onCLick', 'showNav()')
        } else {
            links[i].removeAttribute('onCLick')
        }
    }
}

const px = window.matchMedia("(max-width: 767px)")
setClick(px)
px.addEventListener('change', () => {
    setClick(px)
})

for (p = 0; p < faq.length; p++) {
    faq[p].addEventListener('click', function() {
        const text = this.nextElementSibling
        text.classList.toggle('hidden')
    })
}
