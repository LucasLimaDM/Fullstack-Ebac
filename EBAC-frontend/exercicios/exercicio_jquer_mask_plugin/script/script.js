document.addEventListener('DOMContentLoaded', ()=> {
    const form = document.querySelector('form');

    form.addEventListener('submit', e=>{
        
        e.preventDefault();
        const inputs = document.querySelectorAll('input')
        
        limpaTela(inputs);

        alert('Succes');    
        }
    )

    function limpaTela(inputsToClean) {
        for (const input of inputsToClean) {
            input.value = ''
        }
    }
    
    
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');


})
