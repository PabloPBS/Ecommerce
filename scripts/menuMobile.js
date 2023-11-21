const menuMobile = document.querySelector('#menu')
const abrirMenu = document.querySelector('#abrir-menu')
const fecharMenu = document.querySelector('#fechar-menu')
body = document.getElementsByTagName('body')[0]

function show() {
    menuMobile.style.display= 'block'
    menuMobile.style.left = 0
}

function hide() {
    menuMobile.style.left = '-120%'
}