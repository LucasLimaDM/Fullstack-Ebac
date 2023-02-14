let ul = document.querySelector('#links')
let sidebar = document.querySelector('#sidebar')
let menu = document.querySelector('#menu-hamburguer')
let vw
let topLinks = document.querySelector('#top-links')
let span = document.querySelectorAll('span')
let hamburguer = document.querySelector('#menu-hamburguer')
sidebar.innerHTML = topLinks.innerHTML


function alteraMenu(estado) {
    if (estado == 'aberto') {
        sidebar.style.transform = 'translateX(200px)'
    }
    if (estado == 'fechado') {
        sidebar.style.transform = 'translateX(-200px)'
    }
}

function desenhaMenu(desenho) {
    if (desenho == 'X') {
        hamburguer.style.gap = '0px'
        span[0].style.transform = 'rotate(45deg)'
        span[1].style.display = 'none'
        span[2].style.transform = 'rotate(-45deg)'

    }
    if(desenho == 'E') {

    }
}


// capta clicks no menu e abre ou fecha ele
$('#menu-hamburguer').on('click', function() {
    if(sidebar.style.transform == 'translateX(-200px)'){
        alteraMenu('aberto')
        desenhaMenu('E')
    } else {
        alteraMenu('fechado')
        desenhaMenu('X')
    }
})

// fecha o menu ao mudar o tamanho da tela se ele estiver aberto
document.body.onresize = function(){
    if(sidebar.style.transform == 'translateX(-200px)'){
        console.log('ativou diminui')
        retiraMenu()}   
}




// chega na medida, cria o sidebar invisivel, ele recebe a ul, depois jquery puxa pro lado



