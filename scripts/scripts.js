const menuMobile = document.querySelector('#menu')
const abrirMenu = document.querySelector('#abrir-menu')
const fecharMenu = document.querySelector('#fechar-menu')
const botoesMenu = document.getElementsByClassName('botao-menu')

for (let i = 0; i < botoesMenu.length; i++) {
    botoesMenu[i].addEventListener('click', hide)
}

function show() {
    console.log('a')
    menuMobile.style.display= 'flex'
    menuMobile.style.top = 0
}

function hide() {
    menuMobile.style.top = '-120%'
}