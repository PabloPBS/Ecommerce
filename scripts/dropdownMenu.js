const botoesMenu = [...document.getElementsByClassName("botao-menu")]
const dropdowns = [...document.getElementsByClassName("dropdown")]

botoesMenu.forEach((e, i) => {
    e.addEventListener("click", function() {
        console.log(dropdowns[i-1])
        if (dropdowns[i-1].style.display == 'none') {
            e.style.background = '#181818'
            dropdowns[i-1].style.display = 'block'
        } else {
            dropdowns[i-1].style.display = 'none'    
            e.style.background = '#262526'
        }
        
    })
})