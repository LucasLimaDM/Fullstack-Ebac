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
        sidebar.style.transform = 'translateX(0px)'
        hamburguer.classList.remove('X')
    }
    if (estado == 'fechado') {
        sidebar.style.transform = 'translateX(-200px)'
        hamburguer.classList.add('X')
    }
}


// capta clicks no menu e abre ou fecha ele
$('#menu-hamburguer').on('click', function() {
    if(sidebar.style.transform == 'translateX(-200px)'){
        alteraMenu('aberto')
    } else {
        alteraMenu('fechado')
    }
})

// fecha o menu ao mudar o tamanho da tela se ele estiver aberto
document.body.onresize = function(){
    if(sidebar.style.transform == 'translateX(-200px)'){
        console.log('ativou diminui')
        alteraMenu('aberto')
}
}

const telefone = document.querySelector('#telefone');

// telefone.addEventListener('keyup', function () { 
//     telefone.value = telefone.value.replace(/\D/g,"");
//     telefone.value = telefone.value.replace(/^(\d{2})(\d)/g,"($1) $2")
//     telefone.value = telefone.value.replace(/(\d)(\d{4})$/,"$1-$2")
// })

$(document).ready(function () {  
    $('#telefone').mask('(00) 00000-0000')
})
