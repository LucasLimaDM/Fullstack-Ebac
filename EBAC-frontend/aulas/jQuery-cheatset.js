
$('input-url').val() = $('input-url').val('abcd')
//retorna o value do input | muda o value do input, e retorna o elemento 

$('#div-escondida').slideDown(600)  //.slideUp | .slideToggle
//faz a div aparecer fluindo de cima para baixo no tempo especificado em ms

$('img').appendTo('div')
//adiciona a imagem dentro da div como elemento filho

$(novoItem).hide()
//Esconde o item selecionado

$(novoItem).fadeIn()
//Dá transição para um item aparecer

$('header button').on('click', function() {
})
//Simula o addEventListener

const telefone = document.querySelector('#telefone');

telefone.addEventListener('keyup', function () { 
    telefone.value = telefone.value.replace(/\D/g,"");
    telefone.value = telefone.value.replace(/^(\d{2})(\d)/g,"($1) $2")
    telefone.value = telefone.value.replace(/(\d)(\d{4})$/,"$1-$2")
})