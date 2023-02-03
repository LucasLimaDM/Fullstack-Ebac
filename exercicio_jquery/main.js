$(document).ready(function() {
    
    $('form').on('submit', function(e){
        e.preventDefault()
        let nomeTarefa = $('#nome-tarefa').val()
        adicionaLinha(nomeTarefa)
    })
    function adicionaLinha(tarefa) {
        $('ul').append(`<li> ${tarefa} </li>`)
    }

    $('ul').on('click', ['li'], function(e){
        let liAcionado = e.target
        
        if (liAcionado.classList.contains('deleted')){
            liAcionado.classList.remove('deleted')
        } else {
            liAcionado.classList.add('deleted')
        }
    })
})
