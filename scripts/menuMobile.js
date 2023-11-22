const menuMobile = document.querySelector('#menu')
const abrirMenu = document.querySelector('#abrir-menu')
const fecharMenu = document.querySelector('#fechar-menu')
const botoesMenu = [...document.getElementsByClassName("botao-menu")]
const botoesMenuIcons = [...document.getElementsByClassName('fa-solid fa-chevron-down')]
const dropdowns = [...document.getElementsByClassName("dropdown")]

botoesMenu.forEach((e, i) => {
    e.addEventListener("click", function() {
        if (dropdowns[i-1].style.display != 'block') {
            e.style.background = '#181818'
            dropdowns[i-1].style.display = 'block'
            botoesMenuIcons[i-1].classList.replace('fa-chevron-down', 'fa-chevron-up')
        } else {
            dropdowns[i-1].style.display = 'none'    
            botoesMenuIcons[i-1].classList.replace('fa-chevron-up', 'fa-chevron-down')
            e.style.background = '#262526'
        }
    })
})

function show() {
    menuMobile.style.left = 0
}

function hide() {
    menuMobile.style.left = '-120%'
    dropdowns.forEach((e, i) => {
        e.style.display = 'none'
        botoesMenu[i].style.background = '#262526'
        botoesMenuIcons[i].classList.replace('fa-chevron-up', 'fa-chevron-down')
    })
}

document.addEventListener('click', function(event) {
    const clicouForaDoMenu = !menuMobile.contains(event.target) && event.target !== abrirMenu;

    if (clicouForaDoMenu) {
        hide();
    }
});