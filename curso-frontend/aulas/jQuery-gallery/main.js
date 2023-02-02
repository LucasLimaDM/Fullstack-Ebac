
    // botão do cabeçalho puxa a area de adição de Imagem
    $('header button').on('click', function() {

        $('.new-image-area').slideDown(600)
        
        $('.new-image-area')[0].style.display = 'flex'

    })

    // botão cancelar faz a area de adição de imagem voltar a não aparecer
    $('#b-reset').on('click', function() { 
        $('.new-image-area').slideUp(600)
        
    })

    // botão de adicionar cria nova imagem
    $('form').on('submit', function(e) {
        e.preventDefault()
        const enderecoDaImagem = $('#input-url').val()
        const novoItem = $('<li></li>')
        $(`<img src="${enderecoDaImagem}">
            
            <div>
                <a href="${enderecoDaImagem}" target="_blank">Ver imagem em tamanho real</a>
            </div>
        `).appendTo(novoItem);
        console.log(novoItem)
        $(novoItem).appendTo('ul');
        $(novoItem).hide()
        $(novoItem).fadeIn()
        
        
        $('#input-url').val('');
    })












