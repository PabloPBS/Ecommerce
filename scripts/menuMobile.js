const menuMobile = document.querySelector('#menu')
const abrirMenu = document.querySelector('#abrir-menu')
const fecharMenu = document.querySelector('#fechar-menu')
const botoesMenu = document.getElementsByClassName('botao-menu')
body = document.getElementsByTagName('body')[0]

for (let i = 0; i < botoesMenu.length; i++) {
    botoesMenu[i].addEventListener('click', hide)
}

function show() {
    menuMobile.style.display= 'flex'
    menuMobile.style.top = 0
    body.style.overflow = 'hidden'
}

function hide() {
    menuMobile.style.top = '-120%'
    body.style.overflow = 'auto'
}